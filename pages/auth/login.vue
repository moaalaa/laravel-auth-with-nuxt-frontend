<template>
<section class="hero">
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Email" v-model="form.email">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password" v-model="form.password">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        <button class="button is-success" @click="login">
                            Login
                        </button>
                    </p>
                </div>

            </div>
        </div>

    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: '',

            },
        }
    },
    methods: {
        async login() {
            await this.$auth.login({data: this.form});

            
            
        }
    }
}
</script>