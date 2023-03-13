<i18n>
  {
    "eng": {
      "title": "<div style='line-height: 36px; text-align: right;'><span style='color:{textColorToken}; font-size: 24px; font-family:{fontFamilyToken};'><strong>DIGITAL CONTENT FACTORY: Strategic approach to digital leadership</strong></span></div>"
    }
  }
</i18n>

<template>
  <wiz-block class="default-site-header">
    <wiz-placeholder class="wrapper">
      <wiz-column class="m-p-b-10" :width="25">
        <wiz-image src="./media/images/logo.svg" align="left" alt="Viseven" style="padding: 0 0 10px" :width="146" :height="60"></wiz-image>
      </wiz-column>
      <wiz-column class="m-center m-p-lr-0" style="padding: 0 0 0px 30px" :width="75">
        <wiz-text
          class="header-title"
          :text="$t('title', {
            textColorToken: '#0277BD',
            fontFamilyToken: 'OpenSans',
          })"
        ></wiz-text>
      </wiz-column>
    </wiz-placeholder>
  </wiz-block>
</template>

<script>
export default {
  name: 'default-site-header',
};
</script>

<style lang="scss">
$bg-white: #ffffff;

.default-site-header {
  width: 100%;
  height: auto;
  min-height: 100px;
  margin: 0 auto;
  background: $bg-white;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1140px;
    min-width: 280px;
    height: 100%;
    min-height: 100px;
    margin: 0 auto;

    .title {
      font-weight: 600;
    }
  }

  @media screen and (min-width: 960px) {
    .wrapper:after {
      content: '';
      min-height: inherit;
      font-size: 0;
    }
  }
}
</style>
