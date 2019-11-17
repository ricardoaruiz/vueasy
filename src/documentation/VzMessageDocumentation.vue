<template>
    <section>
        <h2>VzMessage</h2>

        <div class="sub-section">
            <h3>Types</h3> 

            <VzMessage id="vz-message-success"/>
            <VzMessage id="vz-message-error"/>
            <VzMessage id="vz-message-warning"/>
        </div>

        <div class="sub-section">
            <h3>Trigger</h3> 

            <VzMessage id="vz-message-success-trg"/>
            <VzMessage id="vz-message-error-trg"/>
            <VzMessage id="vz-message-warning-trg"/> 

            <VzButton id="btnSuccess" label="Success" @click="triggerMessage('success')" />
            <VzButton id="btnError" label="Error" @click="triggerMessage('error')" />
            <VzButton id="btnWarning" label="Warning" @click="triggerMessage('warning')" />
        </div>
    </section>
</template>

<script>
import VzMessage from '@/components/vz-message/VzMessage';
import VzMessageService from '@/components/vz-message/VzMessageService';

import VzButton from '@/components/vz-button/VzButton';

export default {
    name: 'VzMessageDocumentation',
    components: { VzMessage, VzButton },
    data() {
        return {
            success: false,
            error: false,
            warning: false
        }
    },
    methods: {
        triggerMessage(type) {
            switch (type) {
                case 'success':
                    this.toogleSuccess();
                    return;
                case 'error':
                    this.toggleError();
                    return;
                case 'warning':
                    this.toggleWarning();
                    return;
            }
        },
        toogleSuccess() {
            if (!this.success) {
                VzMessageService.success('vz-message-success-trg', 'Success');
            } else {
                VzMessageService.hide('vz-message-success-trg');
            }
            this.success = !this.success;            
        },
        toggleError() {
            if (!this.error) {
                VzMessageService.error('vz-message-error-trg', 'Error');
            } else {
                VzMessageService.hide('vz-message-error-trg');
            }
            this.error = !this.error;
        },
        toggleWarning() {
            if (!this.warning) {
                VzMessageService.warning('vz-message-warning-trg', 'Warning');
            } else {
                VzMessageService.hide('vz-message-warning-trg');
            }
            this.warning = !this.warning;
        }
    },
    mounted() {
        this.$nextTick(() => {
            VzMessageService.success('vz-message-success', 'Success');
            VzMessageService.error('vz-message-error', 'Error');
            VzMessageService.warning('vz-message-warning', 'Warning');
        })
    }
}
</script>

<style scoped>
section {
    margin-top: 80px;
}
.vz-message-container {
    margin-top: 5px;
}
.vz-button {
    margin: 10px 10px 0 0;
}
</style>