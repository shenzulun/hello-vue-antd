import Button from '@/pages/examples/Button'
import Icon from '@/pages/examples/Icon'
import Grid from '@/pages/examples/Grid'

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
        path: '/grid',
        component: Grid,
    },
    {
        path: '*',
        redirect: '/button'
    }
]