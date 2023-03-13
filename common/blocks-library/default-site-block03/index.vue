<i18n>
  {
    "eng": {
      "title": "<div style='line-height: 60px; text-align: center;'><span style='color:{textColorToken}; font-size: 40px; font-family:{fontFamilyToken};'><strong>Estimate Your Content Strategy — <br class='m-hide'>Get eWizard Pulse Today</strong></span></div>",
      "subtitle": "<div style='line-height: 24px; text-align: center;'><span style='color:{textColorToken}; font-size: 14px; font-family:{fontFamilyToken};'>eWizard Pulse is the application, directly connected with eWizard online platform and analytical engine in place</span></div>",
      "buttonText1": "<div style='line-height: 32px; text-align: center; text-indent:20px;'><span style='color:{textColorToken}; font-size: 20px; font-family:{fontFamilyToken};'><strong>DOWNLOAD</strong></span></div>"
    }
  }
</i18n>

<template>
  <wiz-block class="default-site-block03">
    <wiz-placeholder class="wrapper" style="padding: 60px 0 0">
      <wiz-column class="align-content-center" :width="100">
        <wiz-text
          class="title m-full-width"
          style="padding: 0px 10px"
          :text="$t('title', {
            textColorToken: '#0277BD',
            fontFamilyToken: 'OpenSans',
          })"
        ></wiz-text>
        <wiz-text
          class="m-full-width m-p-tb-20"
          style="padding: 40px 10px 29px"
          :text="$t('subtitle', {
            textColorToken: '#212121',
            fontFamilyToken: 'OpenSans',
          })"
        ></wiz-text>
      </wiz-column>
    </wiz-placeholder>

    <wiz-placeholder class="wrapper" style="padding: 31px 0 59px" align="center">
      <wiz-column class="align-content-center" :width="100">
        <wiz-utility-button
          class="download-btn"
          style="padding: 0 0 0 28px"
          :style="{
            borderRadius: '64px',
            backgroundColor: '#039BE5',
            width: '232px',
          }"
          :text="$t('buttonText1', {
            textColorToken: '#ffffff',
            fontFamilyToken: 'OpenSans',
          })"
          align="center"
          width="auto"
          button-type="download"
          icon-src="./media/images/image1.svg"
          link="https://apps.apple.com/us/app/ewizard-pulse/id1502819286"
        ></wiz-utility-button>
      </wiz-column>
    </wiz-placeholder>
  </wiz-block>
</template>

<script>
export default {
  name: 'default-site-block03',
};
</script>

<style lang="scss">
$bg-white: #fff;
$bg-blue: #0277bd;

.default-site-block03 {
  width: 100%;
  height: auto;
  min-height: 100px;
  margin: 0 auto;
  background: $bg-white;

  .align-content-center {
    align-items: center;
  }

  .align-content-left {
    align-items: flex-start;
  }

  .align-content-right {
    align-items: flex-end;
  }

  .wrapper {
    max-width: 950px;
    min-width: 280px;
    margin: 0 auto;
  }

  .wiz-text {
    max-width: 100%;
  }
}

.download-btn {
  .wiz-utility-button-image {
    width: 22px !important;
    padding: 15px 0;
    box-sizing: content-box;

    img {
      min-width: auto !important;
    }
  }

  .wiz-link {
    padding: 15px 35px 15px 0;
  }
}
</style>
