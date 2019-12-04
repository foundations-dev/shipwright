<template>
    <div>
        <div class="color-grid">
            <div class="grid-container">
                <div v-for="color in neutralColors">
                    <p>{{ getColorCode(color) }}</p>
                    <div class="block" :style="{ backgroundColor: color.value }"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import designTokens from "@/assets/tokens/tokens.raw.json"
import orderBy from "lodash/orderBy"

export default {
    name: "NeutralColors",
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
        getColorCode: function(token) {
            let colorcode = token.name.replace("color_", "")
            return colorcode
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
    margin-top: $space-xl;
    margin-bottom: $space-m;
    color: $color-n100;
    font-size: $size-s;

    .cats {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
    }

    .grid-container {
        display: grid;
        max-width: 1200px;
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
        border: 1px $color-n050 solid;
        margin: $space-s 0;
    }
}

h3 {
    @include reset;
    @include space-stack($space-xs);
    text-transform: capitalize;
    line-height: 1.2;
    width: 100%;
    float: left;
}
</style>

<docs>
  ```jsx
  <color/>
  ```
</docs>
