import React from 'react';
import cx from 'classnames';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Statistic } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';
import { serializeText } from '@eeacms/volto-statistic-block/helpers';

import './styles.less';

const CountUpWrapper = ({ countUpRef, start }) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        start();
        if (isVisible && !visible) {
          setVisible(true);
        }
      }}
      active={!visible}
      delayedCall
    >
      <span ref={countUpRef} />
    </VisibilitySensor>
  );
};

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
              <Statistic.Value className={cx('slate', valueVariation)}>
                {animation.enabled ? (
                  <CountUp
                    end={Number(serializeText(item.value))}
                    duration={animation.duration > 0 ? animation.duration : 2}
                    decimals={animation.decimals > 0 ? animation.decimals : 0}
                    prefix={animation.prefix || ''}
                    suffix={animation.suffix || ''}
                  >
                    {(props) => <CountUpWrapper {...props} />}
                  </CountUp>
                ) : (
                  serializeText(item.value)
                )}
              </Statistic.Value>
              <Statistic.Label className={cx('slate', labelVariation)}>
                {serializeText(item.label)}
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
