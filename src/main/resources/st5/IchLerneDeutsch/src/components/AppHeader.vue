<template>
    <div>
        <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
            <v-list>
                <v-list-tile v-for="(item,i) in menuItems"
                             :key="`navdrawer${i}`">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app dark class="primary">
            <v-toolbar-side-icon @click.stop="drawer=!drawer"
                                 class="hidden-md-and-up"></v-toolbar-side-icon>
            <router-link to="/" tag="span" style="cursor: pointer">
                <v-toolbar-title v-text="'Lerne Deutsch'"></v-toolbar-title>
            </router-link>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn v-for="(item,i) in menuItems" flat
                       :key="`menuitem${i}`" :to="item.route">
                    <v-icon left v-html="item.icon"></v-icon>
                    {{item.title}}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                drawer: false
            }
        },
        computed: {
            menuItems(){
                return [
                    {
                        icon: 'visibility',
                        title: 'Читать',
                        route: '/books'
                    },
                    {
                        icon: 'extension',
                        title: 'Учить слова',
                        route: '/words'
                    },
                    {
                        icon: 'account_circle',
                        title: 'Кабинет',
                        route: '/profile'
                    },
                    {
                        icon: 'directions_run',
                        title: 'Выйти',
                        route: '/logout'
                    },
                    {
                        icon: 'input',
                        title: 'Войти',
                        route: '/signin'
                    },
                    {
                        icon: 'lock_open',
                        title: 'Зарегистрироваться',
                        route: '/signup'
                    }
                ]
            }
        }
    }
</script>

<style scope>

</style>