<template>
    <div>
        <div class="color-grid">
            <h2>Color Grid</h2>
            <div class="grid-container">
                <div class="container_val">
                    <p>value / cat</p>
                    <p class="val">050</p>
                    <p class="val">075</p>
                    <p class="val">100</p>
                    <p class="val">200</p>
                    <p class="val">300</p>
                    <p class="val">400</p>
                    <p class="val">500</p>
                </div>
                <div v-for="cat in categories" :key="cat" class="container_cat">
                    {{ cat }}
                    <div
                        v-for="(prop, index) in getCategory(cat)"
                        :key="index"
                        class="block"
                        :style="{ backgroundColor: prop.value }"
                    ></div>
                </div>
            </div>
        </div>
        <div class="colors">
            <div
                v-for="(prop, index) in colorTokens"
                :key="index"
                class="color"
                :class="prop.category"
            >
                <div class="swatch" :style="{ backgroundColor: prop.value }" />
                <h3>{{ prop.name.replace(/_/g, " ").replace(/color/g, "") }}</h3>
                <span> <em>RGB:</em> {{ prop.value }} </span>
                <span> <em>SCSS:</em> ${{ prop.name.replace(/_/g, "-") }} </span>
            </div>
        </div>
    </div>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"
import orderBy from "lodash/orderBy"

export default {
    name: "Color",
    methods: {
        orderData: function(data) {
            // let byValue = orderBy(data, "value", "asc")
            let byName = orderBy(data, "name", "asc")
            let byCategoryAndName = orderBy(byName, "category")
            return byCategoryAndName
        },
        getCategory: function(category) {
            let filteredcolors = this.tokens.filter(
                prop => prop.category == `color_group_${category}`
            )
            return filteredcolors
        },
    },
    data() {
        return {
            tokens: this.orderData(designTokens.props),
            categories: ["R", "Y", "G", "T", "B", "P"],
        }
    },
    computed: {
        colorTokens() {
            const hexcolorregex = new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$") //filter out old tokens
            const colortokens = this.tokens.filter(prop => hexcolorregex.test(prop.originalValue))
            return colortokens
        },
        neutralColors() {
            const neutrals = this.getCategory("N")
            return neutrals
        },
        featureColors() {
            const features = [
                ...this.getCategory("R"),
                ...this.getCategory("Y"),
                ...this.getCategory("G"),
                ...this.getCategory("T"),
                ...this.getCategory("B"),
                ...this.getCategory("P"),
            ]
            return features
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../../docs.tokens.scss";

/* STYLES
--------------------------------------------- */

.color-grid {
    .cats {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
    }

    .grid-container {
        display: grid;
        max-width: 1200px;
        grid-template-rows: repeat(7, 1fr);
        grid-template-columns: repeat(7, 1fr);
        grid-gap: 20px;
        justify-items: center;

        p {
            margin: 0;
            &.val {
                line-height: 50px;
                margin-bottom: 20px;
            }
        }

        .container_val,
        .container_cat {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .container_cat,
        p {
            text-align: center;
        }
    }

    .block {
        width: 100px;
        height: 50px;
        border-radius: 5px;
        margin: 20px 0;
    }
}

.colors {
    margin-top: $space-l;
    display: block;
    width: 100%;
    @supports (display: grid) {
        display: grid;
        max-width: 1200px;
        align-content: stretch;
        justify-content: left;
        grid-template-columns:
            calc(20% - #{$space-m})
            calc(20% - #{$space-m})
            calc(20% - #{$space-m})
            calc(20% - #{$space-m})
            calc(20% - #{$space-m});
        grid-column-gap: $space-m;
        @media (max-width: 1300px) {
            grid-template-columns:
                calc(25% - #{$space-m})
                calc(25% - #{$space-m})
                calc(25% - #{$space-m})
                calc(25% - #{$space-m});
        }
        @media (max-width: 1100px) {
            grid-template-columns:
                calc(33.333% - #{$space-m})
                calc(33.333% - #{$space-m})
                calc(33.333% - #{$space-m});
        }
        @media (max-width: 900px) {
            grid-template-columns:
                calc(50% - #{$space-m})
                calc(50% - #{$space-m});
        }
        @media (max-width: 400px) {
            grid-template-columns: 100%;
        }
    }
}
.swatch {
    @include stack-space($space-s);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    height: $space-xxl;
    margin-left: -#{$space-s};
    margin-top: -#{$space-s};
    width: calc(100% + #{$space-l});
    float: left;
}
h3 {
    @include reset;
    @include stack-space($space-xs);
    text-transform: capitalize;
    line-height: 1.2;
    width: 100%;
    float: left;
}
.color {
    @include reset;
    @include inset-space($space-s);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-bottom: $space-m;
    box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15);
    font-size: $size-s;
    font-family: $font-text;
    color: $color-rich-black;
    border-radius: $radius-default;
    overflow: hidden;
    text-align: left;
    @supports (display: grid) {
        width: 100%;
        float: left;
    }
    @media (max-width: 400px) {
        margin-bottom: $space-m;
    }
    &:hover {
        span {
            color: $color-rich-black;
            em {
                color: $color-silver;
            }
        }
    }
    span {
        margin-bottom: $space-xs;
        line-height: 1.3;
        color: $color-silver;
        font-size: $size-s;
        width: 100%;
        float: left;
        em {
            user-select: none;
            font-style: normal;
        }
    }
}
</style>

<docs>
  ```jsx
  <color/>
  ```
</docs>
