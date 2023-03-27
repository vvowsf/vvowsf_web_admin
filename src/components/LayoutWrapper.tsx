import AppFooter from '../pages/AppFooter'
import AppHeader from '../pages/AppHeader'

const LayoutWrapper = (props: any) => {
    return (
        <>
            <AppHeader />
            {props.children}
            <AppFooter />
        </>
    )
}

export default LayoutWrapper