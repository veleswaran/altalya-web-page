import React from 'react';
import Layout from "../components/layout/Layout";
import SliderOne from "../components/sections/SliderOne";
import AboutOne from '../components/sections/AboutOne';
import AboutTwo from '../components/sections/AboutTwo';
import CategoryOne from '../components/sections/CategoryOne';
import ClientOne from '../components/sections/ClientOne';
import CountdownOne from '../components/sections/CountdownOne';
import CourseTwo from '../components/sections/CourseTwo';
import CtaOne from '../components/sections/CtaOne';
import FeatureTwo from '../components/sections/FeatureTwo';
import NewsOne from '../components/sections/NewsOne';
import SignupOne from '../components/sections/SignupOne';
import TeamOne from '../components/sections/TeamOne';
import TestimonialOne from '../components/sections/TestimonialOne';
import FaqOne from '../components/sections/FaqOne';

export default function Home() {

    return (
        <>
            <Layout HeaderStyle="two">
                <SliderOne />
                <AboutOne />
                <FeatureTwo />
                <CourseTwo />
                <FaqOne />
                <SignupOne />
                <TeamOne />
                <CtaOne />
                <TestimonialOne />
            </Layout>
        </>
    )
}
