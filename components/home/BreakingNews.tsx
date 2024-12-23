"use client";

import useSWR from "swr";
import fetcher from "@/utils/fetcher";

import "@/app/breaking-news.css";

const BreakingNews = () => {
    const {
        data,
        error,
        isLoading,
    }: { data: any; error: any; isLoading: boolean } = useSWR(
        "/breaking-titles",
        fetcher
    );

    if (error) return <div>Error loading data</div>;
    if (isLoading) return <div></div>;

    return (
        <section>
            <div className="container px-4 mx-auto my-1">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between align-items-center breaking-news bg-white">
                            <div className="d-flex justify-content-center align-items-center py-1 px-4 text-white scroller-title">
                                <span>শিরোনাম</span>
                            </div>
                            <div className="marquee-wrapper mx-3">
                                <div className="marquee">
                                    {data.map((entry: any) => {
                                        return <a className="mx-6" key={entry.news_title} href={"javascript:void(0)"}>{entry.news_title}</a>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BreakingNews;