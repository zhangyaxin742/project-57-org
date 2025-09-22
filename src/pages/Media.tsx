import React from "react";

type PlaceholderItem = {
    id: string;
    title?: string;
    teaser?: string;
    date?: string;
};

function PlaceholderCard({ item, type }: { item?: PlaceholderItem; type: string }) {
    return (
        <div
            className="border border-gray-200 rounded-lg p-3 bg-white min-h-[120px] flex flex-col justify-between"
            aria-label={`${type} item placeholder`}
        >
            <div>
                <div className="bg-gray-100 rounded-md h-32 flex items-center justify-center text-gray-400 text-sm mb-2">
                    {type} placeholder
                </div>
                <div className="font-semibold">{item?.title ?? "Title coming soon"}</div>
                <div className="text-gray-500 text-sm mt-1">{item?.teaser ?? "A short description will appear here."}</div>
            </div>

            <div className="flex items-center justify-between mt-3">
                <div className="text-gray-500 text-sm">{item?.date ?? "TBD"}</div>
                <button
                    className="bg-gray-900 text-white px-3 py-1.5 rounded-md text-sm"
                    aria-label={`Open ${type} placeholder`}
                >
                    Open
                </button>
            </div>
        </div>
    );
}

export default function MediaPage(): JSX.Element {
    // Placeholder empty arrays for now
    const videos: PlaceholderItem[] = [];
    const pressReleases: PlaceholderItem[] = [];
    const galleries: PlaceholderItem[] = [];
    const articles: PlaceholderItem[] = [];

    return (
        <main className="mx-auto my-6 px-5 max-w-[1100px] text-gray-900">
            <header className="mb-4">
                <h1 className="text-2xl font-extrabold">Project 57 — In the Media</h1>
                <p className="mt-2 text-sm text-gray-500">
                    Placeholder page for video clips, press releases, picture galleries, and short articles.
                </p>
            </header>

            <section aria-labelledby="videos-heading">
                <div className="flex items-center justify-between">
                    <h2 id="videos-heading" className="text-base font-semibold">
                        Video Clips
                    </h2>
                    <div className="flex items-center">
                        <button className="bg-gray-900 text-white px-3 py-1.5 rounded-md text-sm mr-2">Upload Clip</button>
                        <button className="bg-gray-700 text-white px-3 py-1.5 rounded-md text-sm">Manage</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3" role="list">
                    {videos.length === 0
                        ? Array.from({ length: 4 }).map((_, i) => <PlaceholderCard key={`v-${i}`} type="Video" />)
                        : videos.map((v) => <PlaceholderCard key={v.id} item={v} type="Video" />)}
                </div>
            </section>

            <section aria-labelledby="press-heading" className="mt-7">
                <div className="flex items-center justify-between">
                    <h2 id="press-heading" className="text-base font-semibold">
                        Press Releases
                    </h2>
                    <div>
                        <button className="bg-gray-900 text-white px-3 py-1.5 rounded-md text-sm">New Release</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3" role="list">
                    {pressReleases.length === 0
                        ? Array.from({ length: 3 }).map((_, i) => <PlaceholderCard key={`p-${i}`} type="Press Release" />)
                        : pressReleases.map((p) => <PlaceholderCard key={p.id} item={p} type="Press Release" />)}
                </div>
            </section>

            <section aria-labelledby="gallery-heading" className="mt-7">
                <div className="flex items-center justify-between">
                    <h2 id="gallery-heading" className="text-base font-semibold">
                        Picture Galleries
                    </h2>
                    <div>
                        <button className="bg-gray-900 text-white px-3 py-1.5 rounded-md text-sm">New Gallery</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3" role="list">
                    {galleries.length === 0
                        ? Array.from({ length: 4 }).map((_, i) => <PlaceholderCard key={`g-${i}`} type="Gallery" />)
                        : galleries.map((g) => <PlaceholderCard key={g.id} item={g} type="Gallery" />)}
                </div>
            </section>

            <section aria-labelledby="articles-heading" className="mt-7">
                <div className="flex items-center justify-between">
                    <h2 id="articles-heading" className="text-base font-semibold">
                        Short Articles
                    </h2>
                    <div>
                        <button className="bg-gray-900 text-white px-3 py-1.5 rounded-md text-sm">New Article</button>
                    </div>
                </div>

                <div className="mt-3">
                    {articles.length === 0 ? (
                        <div className="border-2 border-dashed border-gray-200 rounded-md p-4 text-gray-500">
                            No articles yet. This area will list short news updates and commentary about Project 57.
                        </div>
                    ) : (
                        <div className="grid gap-3">
                            {articles.map((a) => (
                                <article key={a.id} className="border border-gray-200 rounded-lg p-4 bg-white">
                                    <div className="flex justify-between items-start">
                                        <div className="font-semibold">{a.title}</div>
                                        <div className="text-gray-500 text-sm">{a.date}</div>
                                    </div>
                                    <p className="text-gray-700 mt-2">{a.teaser}</p>
                                    <div className="text-right mt-3">
                                        <button className="bg-gray-900 text-white px-3 py-1.5 rounded-md text-sm">Read</button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}