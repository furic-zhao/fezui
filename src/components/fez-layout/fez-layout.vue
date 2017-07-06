<template>
    <div class="fez-layout">
        <div v-bind:class="{ 'nav-md': !menuStatus, 'nav-sm': menuStatus }">
            <div class="container body">
                <div class="main_container">
                    <!-- 边栏 -->
                    <div class="col-md-3 left_col">
                        <div class="left_col scroll-view">
                            <!-- logo -->
                            <div class="navbar nav_title">
                                <slot name="logo"></slot>
                            </div>
                            <!-- /logo -->
                            <!-- menu -->
                            <div class="main_menu_side hidden-print main_menu">
                                <div class="menu_section">
                                    <ul class="nav side-menu">
                                        <li v-for="(nav,navIndex) in navList" :class="{'current-page':nav.active,'active':!menuStatus && nav.active,'active-sm':menuStatus && nav.active}" v-on:click.stop="navToggle(navIndex)">
                                            <router-link :to="nav.href?nav.href:''">
                                                <i v-bind:class="nav.icon" class="nav-item-icon"></i> {{nav.name}}
                                                <Icon class="chevron-right" type="chevron-right" v-if="nav.subNav"></Icon>
                                            </router-link>
                                            <ul class="nav child_menu" v-if="nav.subNav && nav.active">
                                                <li v-for="(subnav,subnavIndex) in nav.subNav" :class="{'current-page':subnav.active,'active':!menuStatus&& subnav.active,'active-sm':menuStatus && subnav.active}" v-on:click.stop="navToggle(navIndex,subnavIndex)">
                                                    <router-link :to="subnav.href?subnav.href:''">
                                                        {{subnav.name}}
                                                        <Icon class="chevron-right" type="chevron-right" v-if="subnav.thirdNav"></Icon>
                                                    </router-link>
                                                    <ul class="nav child_menu" v-if="subnav.thirdNav && subnav.active">
                                                        <li v-for="(thirdnav,thirdnavIndex) in subnav.thirdNav" :class="{'current-page':(thirdnav.active),'active':!menuStatus && thirdnav.active,'active-sm':menuStatus && thirdnav.active}" v-on:click.stop="navToggle(navIndex,subnavIndex,thirdnavIndex)">
                                                            <router-link :to="thirdnav.href?thirdnav.href:''">
                                                                {{thirdnav.name}}
                                                            </router-link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!-- /menu -->
                        </div>
                    </div>
                    <!-- /边栏 -->
                    <!-- 顶部导航 -->
                    <div class="top_nav">
                        <!-- topbar -->
                        <div class="nav_menu">
                            <nav>
                                <div class="nav toggle">
                                    <a v-on:click="menuToggle">
                                        <Icon type="navicon-round"></Icon>
                                    </a>
                                </div>
                                <div class="nav-bar">
                                    <slot name="topbar"></slot>
                                </div>
                            </nav>
                        </div>
                        <!-- /topbar -->
                    </div>
                    <!-- 页面正文 -->
                    <div class="right_col fez-article" role="main">
                        <slot name="content"></slot>
                    </div>
                    <!-- ／页面正文 -->
                    <!-- 页脚 -->
                    <slot name="footer"></slot>
                    <!-- ／页脚 -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                menuStatus: false //边栏缩起状态
            }
        },
        props: {
            navList: {
                type: Array,
                default: []
            }
        },
        created() {
            this.activeNav();
        },
        methods: {
            activeNav() {
                let url = this.$route.path;
                for (let item of this.navList) {
                    if (item.href && item.href === url) {
                        item.active = true;
                    } else {
                        if (item.subNav) {
                            for (let subItem of item.subNav) {
                                if (subItem.href && subItem.href === url) {
                                    item.active = true;
                                    subItem.active = true;
                                } else {
                                    if (subItem.thirdNav) {
                                        for (let thirdItem of subItem.thirdNav) {
                                            if (thirdItem.href && thirdItem.href === url) {
                                                item.active = true;
                                                subItem.active = true;
                                                thirdItem.active = true;
                                            }
                                        }
                                    }

                                }
                            }
                        }
                    }

                }
            },

            menuToggle() {
                this.menuStatus = !this.menuStatus;
            },

            navToggle(navIndex, subnavIndex = -1, thirdnavIndex = -1) {

                let thisActive = true;
                let subActive = true;
                let thirdActive = true;

                thisActive = this.navList[navIndex].active;

                if (subnavIndex > -1) {
                    subActive = this.navList[navIndex].subNav[subnavIndex].active;
                }

                if (thirdnavIndex > -1) {
                    thirdActive = this.navList[navIndex].subNav[subnavIndex].thirdNav[thirdnavIndex].active;
                }



                for (let item of this.navList) {
                    item.active = false;
                    if (item.subNav) {
                        for (let subItem of item.subNav) {
                            subItem.active = false;
                            if (subItem.thirdNav) {
                                for (let thirdItem of subItem.thirdNav) {
                                    thirdItem.active = false;
                                }
                            }
                        }
                    }
                }

                if (thirdnavIndex > -1) {
                    this.navList[navIndex].subNav[subnavIndex].thirdNav[thirdnavIndex].active = thirdActive;
                    this.navList[navIndex].subNav[subnavIndex].active = true;
                    this.navList[navIndex].active = true;
                } else if (subnavIndex > -1) {
                    this.navList[navIndex].subNav[subnavIndex].active = !subActive;
                    this.navList[navIndex].active = true;
                } else {
                    this.navList[navIndex].active = !thisActive;
                }
            }
        }
}
</script>
