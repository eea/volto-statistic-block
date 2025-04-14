import React, { useCallback, useMemo, memo } from 'react';
import isNumber from 'lodash/isNumber';
import isNaN from 'lodash/isNaN';
import cx from 'classnames';
import { FormattedMessage } from 'react-intl';
import { CountUp } from '@eeacms/countup';
import { Statistic } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import {
  serializeNodes as _serializeNodes,
  serializeNodesToText,
} from '@plone/volto-slate/editor/render';
import {
  getFieldURL,
  serializeToNodes,
  serializeNodes,
  enhanceElementWithProps,
} from '@eeacms/volto-statistic-block/helpers';

import './styles.less';

const propsAreEqual = (prevProps, nextProps) => {
  return prevProps.data === nextProps.data;
};

const StatisticItem = memo(
  ({
    item,
    mode,
    textAlign,
    valueVariation,
    labelVariation,
    extraVariation,
    animation,
  }) => {
    const href = mode !== 'edit' ? getFieldURL(item.href) : '#';
    const StatisticWrapper = href && href !== '#' ? UniversalLink : Statistic;

    const formatter = useCallback(
      (value) => {
        let prefix = item.prefix ? item.prefix : animation?.prefix || '';
        let suffix = item.suffix ? item.suffix : animation?.suffix || '';
        return prefix + value.toFixed(animation.decimals) + suffix;
      },
      [item.prefix, item.suffix, animation],
    );

    const renderNodes = (nodes) => {
      const element = _serializeNodes(nodes);
      const enhancedChildren = enhanceElementWithProps(element, {
        animation: {
          ...animation,
          formatter,
        },
      });

      return enhancedChildren;
    };

    const valueNodes = useMemo(
      () => serializeToNodes(item.value),
      [item.value],
    );
    const valueNo = useMemo(
      () => Number(serializeNodesToText(valueNodes)),
      [valueNodes],
    );
    const labelElement = useMemo(
      () => serializeNodes(item.label),
      [item.label],
    );
    const infoElement = useMemo(() => serializeNodes(item.info), [item.info]);

    return (
      <StatisticWrapper
        key={item['@id']}
        {...(href && href !== '#' ? { className: 'ui statistic', href } : {})}
      >
        <Statistic.Value
          className={cx('slate', `text-${textAlign}`, valueVariation)}
        >
          {animation.enabled && isNumber(valueNo) && !isNaN(valueNo) ? (
            <CountUp
              end={valueNo}
              isCounting
              duration={parseInt(
                animation.duration > 0 ? animation.duration : 2,
              )}
              decimalPlaces={animation.decimals > 0 ? animation.decimals : 0}
              formatter={formatter}
            />
          ) : (
            renderNodes(valueNodes)
          )}
        </Statistic.Value>
        <Statistic.Label
          className={cx('slate', `text-${textAlign}`, labelVariation)}
        >
          {labelElement}
        </Statistic.Label>
        <div className={cx('slate', `text-${textAlign}`, extraVariation)}>
          {infoElement}
        </div>
      </StatisticWrapper>
    );
  },
);

const View = memo(({ data, mode }) => {
  const {
    horizontal = false,
    inverted = false,
    size = 'small',
    widths = 'one',
    items = [],
    styles = {},
    animation = {},
  } = data;
  const {
    textAlign = 'center',
    backgroundInverted = 'primary',
    valueVariation = 'secondary',
    labelVariation = 'tertiary',
    extraVariation = 'tertiary',
  } = styles;

  if (!items.length && mode === 'edit')
    return (
      <p>
        <FormattedMessage
          id="Add statistic items"
          defaultMessage="Add statistic items"
        />
      </p>
    );
  return (
    <div
      className={cx({
        [`color-bg-${backgroundInverted}`]: inverted,
      })}
    >
      <Statistic.Group
        horizontal={horizontal}
        inverted={inverted}
        size={size}
        widths={widths}
        backgroundvariant={backgroundInverted}
        valuevariation={valueVariation}
        labelvariation={labelVariation}
        extravariation={extraVariation}
        className={cx(textAlign, { 'ui container': styles.align === 'full' })}
      >
        {items.map((item) => {
          const itemData = {
            item,
            mode,
            textAlign,
            valueVariation,
            labelVariation,
            extraVariation,
            animation,
          };
          return <StatisticItem key={item['@id']} {...itemData} />;
        })}
      </Statistic.Group>
    </div>
  );
}, propsAreEqual);

export default View;
