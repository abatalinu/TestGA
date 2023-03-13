<i18n>
  {
    "eng": {
      "title": "<div style='line-height: 60px; text-align: center;'><span style='font-size: 40px; color:{textColorToken};font-family:{fontFamilyToken};'><strong>eWizard — Content Production Accelerator<br class='m-hide'> Demo for Powerful Pharma Marketing</strong></span></div>",
		  "description": "<div style='line-height: 24px; text-align: left;'><span style='font-size: 14px;color:{textColorToken};font-family:{fontFamilyToken};'>eWizard enables to manage all the content for different channels (e-Detailing, Email, Landing pages) in a single platform with convenient UI; allows creating new content based on pre-approved templates, saving time and effort; other direct integration with Veeva suite, compatibility with IQVIA, Agnitio and other major platforms, as well as automatic publish to Salesforce Marketing Cloud; the platform also has multiple possibilities for quick content localization.</span></div>",
      "buttonText": "<div style='line-height: 32px; text-align: center;'><span style='font-size: 20px;color:{textColorToken};font-family:{fontFamilyToken};'><strong>GET A FREE DEMO</strong></span></div>"
	  }
  }
</i18n>

<template>
  <wiz-block class="default-site-block01">
    <wiz-placeholder class="wrapper">
      <wiz-column :width="100">
        <wiz-text
          class="title m-p-0 m-p-b-20"
          :text="$t('title', {
            textColorToken: '#ffffff',
            fontFamilyToken: 'OpenSans',
          })"
        ></wiz-text>
        <wiz-video class="video-block" src="https://www.youtube.com/watch?v=SWhNcRKEFcM?vq=high"></wiz-video>
        <wiz-text
          class="description mt-t-20 m-p-0 m-p-b-20"
          :text="$t('description', {
            textColorToken: '#ffffff',
            fontFamilyToken: 'OpenSans',
          })"
        ></wiz-text>
        <wiz-button
          :width="236"
          :height="64"
          class="button-free-demo"
          :text="$t('buttonText', {
            textColorToken: '#ffffff',
            fontFamilyToken: 'OpenSans',
          })"
          link="https://www.viseven.com/"
        ></wiz-button>
      </wiz-column>
    </wiz-placeholder>
  </wiz-block>
</template>

<script>
export default {
  name: 'default-site-block01',
};
</script>

<style lang="scss">
$bg-blue: #0277bd;

.default-site-block01 {
  width: 100%;
  margin: 0 auto;
  background: $bg-blue;

  .wrapper {
    max-width: 950px;
    min-width: 280px;
    margin: 0 auto;
    padding: 30px 20px 60px !important;

    .title {
      padding: 30px 0;
    }

    .video-block video {
      height: auto !important;
    }

    .description {
      padding: 60px 0;
      font-weight: normal;
    }

    .button-free-demo {
      margin: 0 auto;
      padding: 30px 0;
      background: #039be5;
      border-radius: 64px;
    }
  }
}
</style>
