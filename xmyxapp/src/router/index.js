import { HashRouter as Router, Switch, //匹配第一个符合的路由 就停止匹配
    Route, // 路由组件
    Redirect //重定向组件

} from "react-router-dom"
import App from "../App"
import Index from "../views/index"
import React from "react"
import Tab from "../views/Tab"
import Women from "../views/Tab/Women"
import Beauty from "../views/Tab/Beauty"
import Accessories from "../views/Tab/Accessories"
import Men from "../views/Tab/Men"
import Mobile from "../views/Tab/Mobile"
import Commodity from "../views/Tab/Commodity"
import Snacks from "../views/Tab/Snacks"
import Sports from "../views/Tab/Sports"
import Digital from "../views/Tab/Digital"
import Womenshoes from "../views/Tab/Womenshoes"
import Luggage from "../views/Tab/Luggage"
import Wash from "../views/Tab/Wash"
import Underwear from "../views/Tab/Underwear"
import Adult from "../views/Tab/Adult"
import Menshoes from "../views/Tab/Menshoes"
import Child from "../views/Tab/Child"
import Detail from "../views/Detail"
import Category from "../views/Category"
import Recommend from "../views/Tab/Recommend"

const router = (
<Router>
		<App>
			
			<Route path="/" component={Index}></Route>

				<Route path="/tab" render={() => <Tab>
				<Route path="/tab/1" component={Recommend}></Route>
				<Route path="/tab/2" component={Women}></Route>
				<Route path="/tab/3" component={Beauty}></Route>
				<Route path="/tab/4" component={Accessories}></Route>
				<Route path="/tab/5" component={Men}></Route>
				<Route path="/tab/6" component={Mobile}></Route>
				<Route path="/tab/7" component={Commodity}></Route>
				<Route path="/tab/10" component={Snacks}></Route>
				<Route path="/tab/11" component={Sports}></Route>
				<Route path="/tab/12" component={Digital}></Route>
				<Route path="/tab/13" component={Womenshoes}></Route>
				<Route path="/tab/14" component={Luggage}></Route>
				<Route path="/tab/15" component={Wash}></Route>
				<Route path="/tab/16" component={Underwear}></Route>
				<Route path="/tab/17" component={Adult}></Route>
				<Route path="/tab/19" component={Menshoes}></Route>
				<Route path="/tab/24" component={Child}></Route>



			</Tab>}></Route>
			<Route path="/detail/:id" component={Detail}></Route>
			<Route path="/category/:id" component={Category}></Route>
		
		





		</App>






	</Router>






)
export default router;

