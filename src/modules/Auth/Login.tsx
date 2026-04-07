import Container from '@/components/ui/Container/Container'

import FormLogin from './components/FormLogin'
import HeaderLogin from './components/HeaderLogin'

const LoginModule = () => {
    return (
        <Container className="bg-[#F2F3F8]">
            <div className="flex min-h-screen w-full items-center justify-center">
                <div className="flex h-[500px] w-[400px] flex-col rounded-lg bg-white shadow-lg">
                    {/* Header  */}
                    <HeaderLogin />
                    {/* Content */}
                    <FormLogin />
                </div>
            </div>
        </Container>
    )
}

export default LoginModule
