import installStatisticBlock from './StatisticBlock';
import RichTextWidget from './RichTextWidget';

const applyConfig = (config) => {
  config.widgets.widget.slate = RichTextWidget;
  config.widgets.widget.slate_richtext = RichTextWidget;

  return [installStatisticBlock].reduce((acc, apply) => apply(acc), config);
};

export default applyConfig;
