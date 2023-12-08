import { useRouter } from "next/router";
import Courses from "../../../util/courseData";
import Layout from "../../../components/layout/Layout";
import CoursesDetails from "../../../components/sections/CoursesDetails";


export default function Index() {
    const router = useRouter();
    const { course } = router.query;
    const coursedata = Courses.filter((val) => val.name === course);

    return (
        <Layout >
            <CoursesDetails course={coursedata}/>
        </Layout>
    );
}