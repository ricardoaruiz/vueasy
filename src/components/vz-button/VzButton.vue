<template>
    <button 
        :id="id"
        :type="buttonType"
        :class="buttonClass"
        :title="tooltip"
        :disabled="disabled"
        v-on="inputListeners"
    >
        <i v-if="icon" :class="`fa fa-${icon}`"></i>
        {{this.label}}
    </button>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        label: {
            type: String
        },
        icon: {
            type: String
        },        
        submit: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        },
        tooltip: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: 'medium',
            validator: (value) => ['small', 'medium', 'large'].indexOf(value) >= 0
        }
    },
    computed: {
        buttonClass() {
            return {
                'vz-button': true,
                'circle'   : this.circle,
                'small'    : this.circle && this.size === 'small',
                'medium'   : this.circle && this.size === 'medium',
                'large'    : this.circle && this.size === 'large',
                'normal'   : !this.circle
            };
        },
        buttonType() {
            return this.submit ? 'submit' : 'button';
        },
        inputListeners() {
            return { ...this.$listeners, 
                click: () => {
                    /** if override is necessary */
                    this.$emit('click')

                }
            };
        }
    }
}
</script>

<style lang="scss" scoped>
.vz-button {
    background: $btn-color;
    color: $btn-font-color;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    outline: none;

    &.normal {
        padding: 10px;
    }
    &.circle {
        border-radius: 50%;
    }
    &.small {
        width: 24px;
        height: 24px;
        font-size: .9rem;
    }
    &.medium {
        width: 38px;
        height: 38px;
        font-size: 1rem;
    }
    &.large {
        width: 52px;
        height: 52px;
        font-size: 1.1rem;
    }
    &:hover {
        background: $btn-color-hover;    
    }
    &:active {
        background: $btn-color-active;
    }
    &:disabled {
        background: $btn-color-disabled;
    }
}
</style>
