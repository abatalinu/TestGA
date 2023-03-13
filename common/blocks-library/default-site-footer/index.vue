<i18n>
  {
    "eng": {
      "address": "<div style='line-height:{lineHeightToken};text-align:{textAlign};'><span style='color:{textColorToken};font-size:{fontSizeToken};font-family:{fontFamilyToken};'>Our mailing address:<br>Lõõtsa St. 2a, Lasnamäe district, Tallinn, Harju county<br>Estonia, 11415<br><a href='tel:+3726980460' target='_blank'><span style='color:{textColorToken};font-size:{fontSizeToken};font-family:{fontFamilyToken};'>+37 269 80 460</span></a></span></div>",
      "link": "<div style='line-height:{lineHeightToken};text-align:{textAlign};'><span style='color:{textColorToken};font-size:{fontSizeToken};font-family:{fontFamilyToken};'><a href='https://viseven.com/' target='_blank'><span style='color:{textColorToken};font-size:{fontSizeToken};font-family:{fontFamilyToken};'><b>viseven.com</b></span></a></span></div>",
      "copy": "<div style='line-height:{lineHeightToken};text-align:{textAlign};'><span style='color:{textColorToken};font-size:{fontSizeToken};font-family:{fontFamilyToken};'><b>Copyright © 2020 Viseven Europe OÜ, All rights reserved</b></span></div>"
    }
  }
</i18n>

<template>
  <wiz-block class="default-site-footer m-center">
    <wiz-placeholder style="padding: 60px 0 0; min-height: auto">
      <wiz-column
        content-align="left"
        style="width: 35%"
      >
        <wiz-image
          class="white-logo"
          src="./media/images/logo.svg"
          align="left"
          alt="Viseven"
          :width="146"
          :height="60"
          style="padding: 0; width: 146px"
        ></wiz-image>
        <wiz-social-follow-icons
          class="social-follow-icons"
          align-icons="left"
          style="padding: 58px 0 0; background-color: transparent"
          icon-border-color="transparent"
          :item-border-width="0"
          :item-width="48"
          :items="[
            {
              link: 'https://www.linkedin.com/company/viseven',
              enableLinkTracking: false,
              alt: 'LinkedIn',
              icon: './media/images/linkedin.png',
              __label: 'LinkedIn',
            },
            {
              link: 'https://twitter.com/viseven_CLM',
              enableLinkTracking: false,
              alt: 'Twitter',
              icon: './media/images/twitter.png',
              __label: 'Twitter',
            },
            {
              link: 'https://www.youtube.com/channel/UCWlpXCeBtfM8GVFf6hOR1Yg?view_as=subscriber',
              enableLinkTracking: false,
              alt: 'YouTube',
              icon: './media/images/youtube.png',
              __label: 'YouTube',
            },
            {
              link: 'https://www.facebook.com/VisevenDigitalContentFactory/',
              enableLinkTracking: false,
              alt: 'Facebook',
              icon: './media/images/facebook.png',
              __label: 'Facebook',
            },
          ]"
        ></wiz-social-follow-icons>
      </wiz-column>
      <wiz-column
        content-align="right"
        style="width: 61.6%"
      >
        <wiz-text
          :text="$t('address', {
            textColorToken: '#ffffff',
            textAlign: 'right',
            lineHeightToken: '28px',
            fontSizeToken: '14px',
            fontFamilyToken: 'OpenSans, sans-serif',
          })"
          style="padding: 0"
        ></wiz-text>
        <wiz-text
          :text="$t('link', {
            textColorToken: '#ffffff',
            textAlign: 'right',
            lineHeightToken: '36px',
            fontSizeToken: '24px',
            fontFamilyToken: 'OpenSans, sans-serif',
          })"
          style="padding: 28px 0 0"
        ></wiz-text>
      </wiz-column>
    </wiz-placeholder>
    <wiz-placeholder style="padding: 25px 0 30px; min-height: auto">
      <wiz-column :width="100" content-align="center">
        <wiz-text
          :text="$t('copy', {
            textColorToken: '#ffffff',
            textAlign: 'center',
            lineHeightToken: '12px',
            fontSizeToken: '10px',
            fontFamilyToken: 'OpenSans, sans-serif',
          })"
          style="padding: 0"
        ></wiz-text>
      </wiz-column>
    </wiz-placeholder>
  </wiz-block>
</template>

<script>
export default {
  name: 'default-site-footer',
};
</script>

<style lang="scss">
$bg-blue: #0277bd;

.default-site-footer {
  width: 100%;
  margin: 0 auto;
  background: $bg-blue;

  .wiz-placeholder {
    max-width: 1140px;
    min-width: 280px;
    margin: 0 auto;
  }

  .social-follow-icons {
    img {
      width: 48px !important;
      max-height: 100% !important;
    }

    td.item {
      padding: 0 5px;
    }

    td.item.first-item {
      padding-right: 5px;
    }

    td.item.last-item {
      padding-left: 5px;
    }
  }

  a {
    text-decoration: none;
  }

  .wiz-text {
    max-width: 100%;
  }
}

@media screen and (max-width: 599px), screen and (max-width: 599px) and (min-width: 1px) {
  div.default-site-footer {
    padding: 30px 0 !important;

    .social-follow-icons {
      padding-top: 35px !important;

      img {
        width: 40px !important;
      }

      td.item {
        padding: 0 5px;
      }
    }
  }
}
</style>
