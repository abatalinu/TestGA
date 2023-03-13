<i18n>
  {
    "eng": {
	 	  "title": "<div style='line-height: 60px; text-align: center;'><span style='color:{textColorToken}; font-size: 40px; font-family:{fontFamilyToken};'>Bringing standards in content creation on<br class='m-hide'> multiple levels</span></div>",
      "card1title": "<div style='line-height: 36px; text-align: left;'><span style='color:{textColorToken}; font-size: 24px; font-family:{fontFamilyToken};'>Concept</span></div>",
      "card1desc": "<div style='line-height: 24px; text-align: left;'><span style='color:{textColorToken}; font-size: 14px; font-family:{fontFamilyToken};'>Deliver unified storyboard template, readable and reusable across affiliates</span></div>",
      "card2title": "<div style='line-height: 36px; text-align: left;'><span style='color:{textColorToken}; font-size: 24px; font-family:{fontFamilyToken};'>Creative design</span></div>",
      "card2desc": "<div style='line-height: 24px; text-align: left;'><span style='color:{textColorToken}; font-size: 14px; font-family:{fontFamilyToken};'>Unity and consistency of navigation, single style across brands within one portfolio</span></div>",
      "card3title": "<div style='line-height: 36px; text-align: left;'><span style='color:{textColorToken}; font-size: 24px; font-family:{fontFamilyToken};'>Technology</span></div>",
      "card3desc": "<div style='line-height: 24px; text-align: left;'><span style='color:{textColorToken}; font-size: 14px; font-family:{fontFamilyToken};'>Writing code according to eWizard Framework HTML5 Standard — content is 100% editable in eWizard</span></div>"
    }
  }
</i18n>

<template>
  <wiz-block class="default-site-block02">
    <wiz-placeholder class="wrapper m-p-20" style="padding: 60px 0 0">
      <wiz-column :width="100">
        <wiz-text
          class="title"
          :text="$t('title', {
            textColorToken: '#212121',
            fontFamilyToken: 'OpenSans',
          })"
        ></wiz-text>
      </wiz-column>
    </wiz-placeholder>

    <wiz-placeholder class="wrapper m-direction-column m-p-t-0" style="padding: 60px 0">
      <wiz-column class="card-column m-direction-column m-full-width m-m-0 mt-center m-m-b-20 m-p-20" :width="30">
        <wiz-placeholder style="padding: 0 0 30px" class="m-direction-column title-wrapper">
          <wiz-column class="m-p-b-10" :width="30">
            <wiz-image src="./media/images/icon-1.png" align="left" alt="Icon" style="padding: 0" :width="60" :height="54"></wiz-image>
          </wiz-column>
          <wiz-column class="m-center" :width="70">
            <wiz-text
              class="m-p-0"
              :text="$t('card1title', {
                textColorToken: '#ffffff',
                fontFamilyToken: 'OpenSans',
              })"
            ></wiz-text>
          </wiz-column>
        </wiz-placeholder>
        <wiz-placeholder class="description-wrapper m-p-0">
          <wiz-column class="m-center" :width="100">
            <wiz-text
              :text="$t('card1desc', {
                textColorToken: '#ffffff',
                fontFamilyToken: 'OpenSans',
              })"
            ></wiz-text>
          </wiz-column>
        </wiz-placeholder>
      </wiz-column>
      <wiz-column class="card-column m-direction-column m-full-width mt-center m-m-0 m-m-b-20 m-p-20" :width="30">
        <wiz-placeholder style="padding: 0 0 30px" class="title-wrapper m-direction-column">
          <wiz-column class="m-p-b-10" :width="30">
            <wiz-image src="./media/images/icon-2.png" align="left" alt="Icon" style="padding: 0" :width="66" :height="66"></wiz-image>
          </wiz-column>
          <wiz-column class="m-center" :width="70">
            <wiz-text
              class="m-p-0"
              :text="$t('card2title', {
                textColorToken: '#ffffff',
                fontFamilyToken: 'OpenSans',
              })"
            ></wiz-text>
          </wiz-column>
        </wiz-placeholder>
        <wiz-placeholder class="description-wrapper m-p-0">
          <wiz-column class="m-center" :width="100">
            <wiz-text
              :text="$t('card2desc', {
                textColorToken: '#ffffff',
                fontFamilyToken: 'OpenSans',
              })"
            ></wiz-text>
          </wiz-column>
        </wiz-placeholder>
      </wiz-column>
      <wiz-column class="card-column m-direction-column m-full-width mt-center m-m-0 m-m-b-20 m-p-20" :width="30">
        <wiz-placeholder style="padding: 0 0 30px 0" class="title-wrapper m-direction-column">
          <wiz-column class="m-p-b-10" :width="30">
            <wiz-image src="./media/images/icon-3.png" align="left" alt="Icon" style="padding: 0" :width="54" :height="54"></wiz-image>
          </wiz-column>
          <wiz-column class="m-center" :width="70">
            <wiz-text
              class="m-p-0"
              :text="$t('card3title', {
                textColorToken: '#ffffff',
                fontFamilyToken: 'OpenSans',
              })"
            ></wiz-text>
          </wiz-column>
        </wiz-placeholder>
        <wiz-placeholder class="description-wrapper m-p-0">
          <wiz-column class="m-center" :width="100">
            <wiz-text
              :text="$t('card3desc', {
                textColorToken: '#ffffff',
                fontFamilyToken: 'OpenSans',
              })"
            ></wiz-text>
          </wiz-column>
        </wiz-placeholder>
      </wiz-column>
    </wiz-placeholder>
  </wiz-block>
</template>

<script>
export default {
  name: 'default-site-block02',
};
</script>

<style lang="scss">
$bg-lightblue: #c0eafd;
$bg-blue: #0277bd;

.default-site-block02 {
  width: 100%;
  min-height: 100px;
  height: auto;
  margin: 0 auto;
  background: $bg-lightblue;

  .card-column {
    box-sizing: border-box;

    max-width: 360px;
    min-width: 280px;
    width: 360px;
    min-height: 250px;
    padding: 40px;
    background: $bg-blue;

    &:nth-of-type(1) {
      margin-right: 20px;
    }

    &:nth-of-type(3) {
      margin-left: 20px;
    }

    .wiz-placeholder {
      padding-left: 0 !important;
    }

    .wiz-placeholder {
      padding-right: 0 !important;
    }
  }

  .wrapper {
    max-width: 1140px;
    margin: 0 auto;
  }

  .title-wrapper {
    width: 100%;
    align-items: center;

    .wiz-text {
      padding-left: 10px;
    }
  }

  .description-wrapper {
    max-width: 100%;
    margin: 0 auto;
  }
}
</style>
