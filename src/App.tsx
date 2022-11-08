import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {DetailedJobPage, JobsPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'jobs'}/>}/>
                <Route path={'jobs'} element={<JobsPage/>}/>
                <Route path={'jobs/:id'} element={<DetailedJobPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};