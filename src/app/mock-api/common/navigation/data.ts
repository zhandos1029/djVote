/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'pages',
        title   : 'Pages',
        subtitle: 'Custom made page designs',
        type    : 'group',
        icon    : 'heroicons_outline:document',
        children: [
            {
                id   : 'pages.activities',
                title: 'Activities',
                type : 'basic',
                icon : 'heroicons_outline:menu-alt-2',
                link : '/pages/activities'
            },
            {
                id      : 'pages.authentication',
                title   : 'Authentication',
                type    : 'collapsable',
                icon    : 'heroicons_outline:lock-closed',
                children: [
                    {
                        id      : 'pages.authentication.sign-in',
                        title   : 'Sign in',
                        type    : 'collapsable',
                        children: [
                            {
                                id   : 'pages.authentication.sign-in.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/classic'
                            },
                            {
                                id   : 'pages.authentication.sign-in.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/modern'
                            },
                            {
                                id   : 'pages.authentication.sign-in.modern-reversed',
                                title: 'Modern Reversed',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/modern-reversed'
                            },
                            {
                                id   : 'pages.authentication.sign-in.split-screen',
                                title: 'Split Screen',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/split-screen'
                            },
                            {
                                id   : 'pages.authentication.sign-in.split-screen-reversed',
                                title: 'Split Screen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/split-screen-reversed'
                            },
                            {
                                id   : 'pages.authentication.sign-in.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.sign-in.fullscreen-reversed',
                                title: 'Fullscreen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/sign-in/fullscreen-reversed'
                            }
                        ]
                    },
                    {
                        id      : 'pages.authentication.sign-up',
                        title   : 'Sign up',
                        type    : 'collapsable',
                        link    : '/pages/authentication/sign-up',
                        children: [
                            {
                                id   : 'pages.authentication.sign-up.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/classic'
                            },
                            {
                                id   : 'pages.authentication.sign-up.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/modern'
                            },
                            {
                                id   : 'pages.authentication.sign-up.modern-reversed',
                                title: 'Modern Reversed',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/modern-reversed'
                            },
                            {
                                id   : 'pages.authentication.sign-up.split-screen',
                                title: 'Split Screen',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/split-screen'
                            },
                            {
                                id   : 'pages.authentication.sign-up.split-screen-reversed',
                                title: 'Split Screen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/split-screen-reversed'
                            },
                            {
                                id   : 'pages.authentication.sign-up.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.sign-up.fullscreen-reversed',
                                title: 'Fullscreen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/sign-up/fullscreen-reversed'
                            }
                        ]
                    },
                    {
                        id      : 'pages.authentication.forgot-password',
                        title   : 'Forgot password',
                        type    : 'collapsable',
                        link    : '/pages/authentication/forgot-password',
                        children: [
                            {
                                id   : 'pages.authentication.forgot-password.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/classic'
                            },
                            {
                                id   : 'pages.authentication.forgot-password.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/modern'
                            },
                            {
                                id   : 'pages.authentication.forgot-password.modern-reversed',
                                title: 'Modern Reversed',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/modern-reversed'
                            },
                            {
                                id   : 'pages.authentication.forgot-password.split-screen',
                                title: 'Split Screen',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/split-screen'
                            },
                            {
                                id   : 'pages.authentication.forgot-password.split-screen-reversed',
                                title: 'Split Screen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/split-screen-reversed'
                            },
                            {
                                id   : 'pages.authentication.forgot-password.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.forgot-password.fullscreen-reversed',
                                title: 'Fullscreen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/forgot-password/fullscreen-reversed'
                            }
                        ]
                    },
                    {
                        id      : 'pages.authentication.reset-password',
                        title   : 'Reset password',
                        type    : 'collapsable',
                        link    : '/pages/authentication/reset-password',
                        children: [
                            {
                                id   : 'pages.authentication.reset-password.classic',
                                title: 'Classic',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/classic'
                            },
                            {
                                id   : 'pages.authentication.reset-password.modern',
                                title: 'Modern',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/modern'
                            },
                            {
                                id   : 'pages.authentication.reset-password.modern-reversed',
                                title: 'Modern Reversed',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/modern-reversed'
                            },
                            {
                                id   : 'pages.authentication.reset-password.split-screen',
                                title: 'Split Screen',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/split-screen'
                            },
                            {
                                id   : 'pages.authentication.reset-password.split-screen-reversed',
                                title: 'Split Screen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/split-screen-reversed'
                            },
                            {
                                id   : 'pages.authentication.reset-password.fullscreen',
                                title: 'Fullscreen',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/fullscreen'
                            },
                            {
                                id   : 'pages.authentication.reset-password.fullscreen-reversed',
                                title: 'Fullscreen Reversed',
                                type : 'basic',
                                link : '/pages/authentication/reset-password/fullscreen-reversed'
                            }
                        ]
                    }
                ]
            },
            {
                id      : 'pages.error',
                title   : 'Error',
                type    : 'collapsable',
                icon    : 'heroicons_outline:exclamation-circle',
                children: [
                    {
                        id   : 'pages.error.404',
                        title: '404',
                        type : 'basic',
                        link : '/pages/error/404'
                    },
                    {
                        id   : 'pages.error.500',
                        title: '500',
                        type : 'basic',
                        link : '/pages/error/500'
                    }
                ]
            },
            {
                id   : 'pages.profile',
                title: 'Profile',
                type : 'basic',
                icon : 'heroicons_outline:user-circle',
                link : '/pages/profile'
            }
        ]
    }
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'pages',
        title   : 'Pages',
        tooltip : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'group',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
