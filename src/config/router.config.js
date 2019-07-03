import Button from '@/pages/examples/Button'
import Icon from '@/pages/examples/Icon'

export const constantRouterMap = [
    {
        path: '/button',
        component: Button,
    },
    {
        path: '/icon',
        component: Icon,
    },
    {
        path: '*',
        redirect: '/button'
    }
]