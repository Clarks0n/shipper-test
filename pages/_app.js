import '../styles/globals.css'

// Component
import Layout from '../components/layout';

// Icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faCircleUser, faCalendar, faHome, faCalendarAlt, faPlus, faAngleRight, faAngleLeft, faEllipsisH, faBars } from '@fortawesome/free-solid-svg-icons'

// Redux
import { Provider } from 'react-redux'
import store from '../store/store';

// Register Icon
library.add( faSearch, faCircleUser, faCalendar, faHome, faCalendarAlt, faPlus, faAngleRight, faAngleLeft, faEllipsisH, faBars);

function MyApp({ Component, pageProps }) {
  return  (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>            
  )
}

export default MyApp
