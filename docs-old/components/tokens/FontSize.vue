<template>
    <div class="font-sizes">
        <p></p>
        <div class="size-base font">
            ${{ this.size_base.name.replace(/_/g, "-") }} <span>({{ this.size_base.value }})</span>
        </div>
        <div
            v-for="(prop, index) in tokens"
            :key="index"
            class="font"
            v-if="prop.category === 'font-size'"
            :style="{ fontSize: prop.value }"
        >
            ${{ prop.name.replace(/_/g, "-") }} <span>({{ prop.value }})</span>
        </div>
    </div>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"
import orderBy from "lodash/orderBy"

/**
 * This typographic scale makes it easier to achieve visual harmony in the
 * interface. It’s purposefully designed to keep the number of separate font
 * sizes to a minimum. To edit font-sizes, see
 * [/src/tokens/font-size.yml](https://github.com/viljamis/vue-design-system/blob/master/src/tokens/font-size.yml).
 */
export default {
    name: "FontSize",
    methods: {
        orderData: function(data) {
            let order = orderBy(data, "value", "desc")
            // filter out size_base
            order = order.filter(e => {
                return e.name != "size_base"
            })
            return order
        },
    },
    data() {
        return {
            tokens: this.orderData(designTokens.props),
            size_base: designTokens.props.size_base,
        }
    },
}
</script>

<style lang="scss" scoped>
@import "../../docs.tokens.scss";

/* STYLES
--------------------------------------------- */

.font-sizes {
    margin: $space-l;
    overflow: hidden;
    width: 100%;
}

.font {
    @include reset;
    font-family: $font-heading;
    font-weight: $weight-normal;
    line-height: $line-height-xs;
    color: $color-rich-black;
    margin-bottom: $space-m;
    font-style: normal;
    span {
        letter-spacing: -0.02em;
        margin-left: 10px;
        font-weight: $weight-normal;
        color: $color-silver;
        user-select: none;
        font-style: normal;
    }
}

.size-base {
    margin: $space-xxl 0;
    text-align: center;
}
</style>

<docs>
  ```jsx
  <FontSize/>
  ```
</docs>
