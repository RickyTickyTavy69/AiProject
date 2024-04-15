import {type JSX} from 'react'
import { Outlet } from 'react-router-dom'
import classNames from 'src/shared/lib/classNames/classNames'
import { Navbar } from 'src/widgets/Navbar'
import Sidebar from 'src/widgets/Sidebar/ui/Sidebar/Sidebar'
import { useTranslation } from 'react-i18next'

export const Main = (): JSX.Element => {
  const { t } = useTranslation();

    return (
        <div>
            <div className={classNames('bg-bkg', {},
                ['h-screen', 'text-content'])}>
                <Navbar/>
                <section className={'flex h-mainContent'}>
                    <Sidebar/>
                    <div className={'p-4 w-full h-full'}>
                        <div className={'mt-7'}>{t('Ai Image Creator')}</div>
                        <div className={`pt-10 h-mainContent
                        flex items-center
                         justify-center`}>
                            <Outlet/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
