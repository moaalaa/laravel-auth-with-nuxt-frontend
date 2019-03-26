<template>
<section class="hero">
    <div class="hero-body">
        <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="name" v-model="form.name">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>
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
                        <button class="button is-success" @click="register">
                            Register
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
    middleware: 'guest',
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',

            },
        }
    },
    methods: {
        async register() {
            await this.$axios.post('/register', this.form);
            
            await this.$auth.login({data: this.form});

            this.$router.push({
                name: 'index'
            });
        }
    }
}
</script>