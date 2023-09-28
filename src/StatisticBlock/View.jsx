import React from 'react';
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
} from '@eeacms/volto-statistic-block/helpers';

import './styles.less';

const View = ({ data, mode }) => {
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
        {items.map((item, index) => {
          const href = mode !== 'edit' ? getFieldURL(item.href) : '#';
          const StatisticWrapper =
            href && href !== '#' ? UniversalLink : Statistic;
          const valueNodes = serializeToNodes(item.value);
          const valueNo = Number(serializeNodesToText(valueNodes));

          return (
            <StatisticWrapper
              key={`${index}-${item.label}`}
              {...(href && href !== '#'
                ? { className: 'ui statistic', href }
                : {})}
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
                    decimalPlaces={
                      animation.decimals > 0 ? animation.decimals : 0
                    }
                    formatter={(value) => {
                      let prefix = animation.prefix || '';
                      let suffix = animation.suffix || '';
                      return (
                        prefix + value.toFixed(animation.decimals) + suffix
                      );
                    }}
                  />
                ) : (
                  _serializeNodes(valueNodes)
                )}
              </Statistic.Value>
              <Statistic.Label
                className={cx('slate', `text-${textAlign}`, labelVariation)}
              >
                {serializeNodes(item.label)}
              </Statistic.Label>
              <div className={cx('slate', `text-${textAlign}`, extraVariation)}>
                {serializeNodes(item.info)}
              </div>
            </StatisticWrapper>
          );
        })}
      </Statistic.Group>
    </div>
  );
};

export default View;
