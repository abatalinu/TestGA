import wizText from '@site/wiz-text';
import wizImage from '@site/wiz-image';
import wizButton from '@site/wiz-button';
import wizVideo from '@site/wiz-video';
import wizSocialFollowIcons from '@email/wiz-social-follow-icons';
import wizBlock from '@site/wiz-block';
import wizPlaceholder from '@site/wiz-placeholder';
import wizUtilityButton from '@email/wiz-utility-button';
import wizReferences from '@site/wiz-references';

export default function (Vue) {
  Vue.use(wizPlaceholder);
  Vue.component('wiz-text', wizText);
  Vue.component('wiz-video', wizVideo);
  Vue.component('wiz-image', wizImage);
  Vue.component('wiz-button', wizButton);
  Vue.component('wiz-utility-button', wizUtilityButton);
  Vue.component('wiz-social-follow-icons', wizSocialFollowIcons);
  Vue.component('wiz-block', wizBlock);
  Vue.component('wiz-references', wizReferences);
}

