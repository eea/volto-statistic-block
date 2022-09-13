import React from 'react';
import cx from 'classnames';
import CountUp from 'react-countup';
import { Statistic } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import { serializeText } from '@eeacms/volto-statistic-block/helpers';

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
    backgroundInverted = 'primary',
    valueVariation = 'secondary',
    labelVariation = 'tertiary',
    extraVariation = 'tertiary',
  } = styles;

  if (!items.length && mode === 'edit') return <p>Add statistic items</p>;
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
        className={styles.align === 'full' ? 'ui container' : ''}
      >
        {items.map((item, index) => {
          const StatisticWrapper = item.href ? UniversalLink : Statistic;
          return (
            <StatisticWrapper
              key={`${index}-${item.label}`}
              {...(item.href
                ? { className: 'ui statistic', href: item.href }
                : {})}
            >
              <Statistic.Value className={cx(valueVariation)}>
                <CountUp
                  end={Number(item.value)}
                  duration={
                    animation.enabled
                      ? animation.duration > 0
                        ? animation.duration
                        : 2
                      : 0
                  }
                  decimals={animation.decimals > 0 ? animation.decimals : 0}
                  prefix={animation.prefix || ''}
                  suffix={animation.suffix || ''}
                />
              </Statistic.Value>
              <Statistic.Label className={cx(labelVariation)}>
                {item.label}
              </Statistic.Label>
              <div className={cx('slate text-center', extraVariation)}>
                {serializeText(item.info)}
              </div>
            </StatisticWrapper>
          );
        })}
      </Statistic.Group>
    </div>
  );
};

export default View;
