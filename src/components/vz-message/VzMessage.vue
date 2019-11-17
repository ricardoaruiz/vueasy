<template>
    <transition appear>
        <div 
            v-if="value" 
            class="vz-message-container" 
            :class="type"
        >
            <i :class="`vz-message-icon fa fa-${icon} fa-2x`" />
            {{this.value}}
        </div>
    </transition>
</template>

<script>
import VzMessageService from './VzMessageService';

export default {
    name: 'Message',
    data() {
        return {
            value: '',
            type: 'success'
        }
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        icon() {
            switch (this.type) {
                case VzMessageService.TYPES.SUCCESS:
                    return 'check';
                case VzMessageService.TYPES.ERROR:
                    return 'bomb';
                case VzMessageService.TYPES.WARNING:
                    return 'exclamation-triangle';
                default:
                    return 'check';
            }
        }
    },
    created() {
        VzMessageService.subscribe(this.id, objMessage => {
            this.value = objMessage.message;
            this.type = objMessage.type;
        });
    },
    destroyed() {
        VzMessageService.unsubscribe(this.id);
    }
}
</script>

<style lang="scss" scoped>
.vz-message-container {
    padding: 12px;
    color: $white-color;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 4px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.vz-message-icon {
    margin-right: 15px;
}
.vz-message-container.error {
    background: $message-error-color;
}
.vz-message-container.success {
    background: $message-success-color;
}
.vz-message-container.warning {
    background: $message-warning-color;
}

.v-enter-active,
.v-leave-active {
  transition: opacity .5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
