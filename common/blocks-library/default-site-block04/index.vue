<i18n>
  {
    "eng": {
	 	  "title": "<div style='line-height: 60px; text-align: center;'><span style='color:{textColorToken}; font-size: 40px; font-family:{fontFamilyToken};'><strong>Stay Connected to Viseven</strong></span></div>",
		  "subtitle": "<div style='line-height: 24px; text-align: center;'><span style='color:{textColorToken}; font-size: 14px; font-family:{fontFamilyToken};'>Subscribe to your pharma marketing newsletter</span></div>",
      "buttonText": "<div style='line-height: 32px; text-align: center;'><span style='color:{textColorToken}; font-size: 20px; font-family:{fontFamilyToken};'><strong>SUBSCRIBE</strong></span></div>"
	  }
  }
</i18n>

<template>
  <wiz-block class="default-site-block04">
    <wiz-placeholder class="wrapper" style="padding: 60px 0 0">
      <wiz-column class="align-content-center" :width="100">
        <wiz-text
          class="title m-full-width"
          :text="$t('title', {
            textColorToken: '#212121',
            fontFamilyToken: 'OpenSans',
          })"
        ></wiz-text>
        <wiz-text
          class="m-full-width m-p-tb-20"
          style="padding: 40px 0 35px"
          :text="$t('subtitle', {
            textColorToken: '#212121',
            fontFamilyToken: 'OpenSans',
          })"
        ></wiz-text>
      </wiz-column>
    </wiz-placeholder>

    <wiz-placeholder class="wrapper" style="padding: 27px 0 60px">
      <wiz-column class="align-content-center" :width="100">
        <wiz-button
          class="default-button"
          style="padding: 64px 0 0; border-radius: 64px"
          :style="{
            borderRadius: '64px',
            backgroundColor: '#0277BD',
          }"
          :width="169"
          :text="$t('buttonText', {
            textColorToken: '#ffffff',
            fontFamilyToken: 'OpenSans',
          })"
          component-name="Subscribe Button"
          link="https://viseven.com.ua/products/ewizard"
        ></wiz-button>
      </wiz-column>
    </wiz-placeholder>
  </wiz-block>
</template>

<script>
export default {
  name: 'default-site-block04',
};
</script>

<style lang="scss">
$bg-lightblue: #c0eafd;
$bg-blue: #0277bd;

.default-site-block04 {
  width: 100%;
  height: auto;
  min-height: 100px;
  margin: 0 auto;
  background: $bg-lightblue;

  .align-content-center {
    align-items: center;
  }

  .wrapper {
    max-width: 950px;
    min-width: 280px;
    margin: 0 auto;
  }

  .wiz-text {
    max-width: 100%;
  }

  .wiz-button.default-button {
    background-color: $bg-blue;
  }
}
</style>
