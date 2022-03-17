const model = (() => {
    const episodes = [
        {
            title: "Ginny",
            desc: "Harry tries to talk about the quidditch toys he's building for his future child while Aquila fights to keep him on topic.",
            link: "https://www.youtube.com/embed/Mz2YrzyT_iU",
            breakdown: "The idea of Harry Potter in therapy started as a joke, but by fall 2019, we became serious about turning it into a web series. The limited cast and locations required made it perfect for a low budget, and we though the premise had a lot of inherent drama; Harry can be a pretty affable guy, but he’ll do anything to avoid opening up to others. \n\nIn this episode, we focused on that internal conflict. Harry keeps trying wax poetic about Quidditch toys and magic ceilings, but Aquila refuses to let him control their conversation. Frustration slowly builds until Harry cracks and admits, as much to Aquila as to himself, what is truly bothering him. This is the shortest and simplest episode, but it established a basic structure that we drew from in every subsequent episode: have harry think he’s upset about one thing when it’s really something deeper.",
            bonusContent: [
                {
                    bonusCategory: "Casting"
                },
                {
                    bonusDesc: "Bryce's first audition:",
                    links: [
                        "https://www.youtube.com/embed/Mz2YrzyT_iU",
                    ]
                },
                {
                    bonusCategory: "Disguising Our Apartment",
                },
                {
                    bonusDesc: "We shot the entire series in our apartment.  We built a fake bookshelf to cover a large standing heating unit and a frosted window to hide the view into our kitchen.",
                    links: [
                        "../images/ep_1/e01m03_roombefore.jpg",
                        "../images/ep_1/e01m02_set.jpg",
                        "../images/ep_1/E01m04_window.jpg",
                        "../images/ep_1/E01m05_windowbehind.jpg"
                    ]
                },
                {
                    bonusCategory: "The Pensieve",
                },
                {
                    bonusDesc: "Tyler designed the pensieve and built it out of an old table.",
                    links: [
                        "../images/ep_1/e01m06_pensieveconcept1.jpg",
                        "../images/ep_1/e01m07_pensieveconcept2.jpg",
                        "../images/ep_1/e01m08_pensievebefore.jpg",
                        "../images/ep_1/e01m09_pensievecomplete.jpg"
                    ]
                },
                {
                    bonusDesc: "LED lights and pearlescent powder provide the magical glow.",
                    links: [
                        "../images/ep_1/e01m10_pensieveglow.jpg",
                    ]
                },
                {
                    bonusDesc: "Finally, some rejected pensieve designs:",
                    links: [
                        "../images/ep_1/e01m11_pensievealt1.jpg",
                        "../images/ep_1/e01m12_pensievealt2.jpg",
                        "../images/ep_1/e01m13_pensievealt3.jpg",
                    ]
                },
                {
                    bonusCategory: "Designing the First Episode",
                },
                {
                    bonusDesc: "Cutler designed Aquila's diploma, which hangs proudly over her couch, as well as her patient intake form.",
                    links: [
                        "../images/ep_1/e01m14_diploma.jpg",
                        "../images/ep_1/e01m15_form.jpg",
                    ],
                },
                {
                    bonusDesc: "Cutler also designed the Witch Weekly magazine cover in the lobby, for which Tyler posed.",
                    links: [
                        "../images/ep_1/e01m17_witchweekly.gif",
                    ]
                },
                {
                    bonusDesc: "We bought Harry a funny owl tie in honor of his late pet.",
                    links: [
                        "../images/ep_1/e01m16_tie.jpg",
                    ],
                },
                {
                    bonusDesc: "Janet brought all her costumes from home!",
                    links: [
                        "../images/ep_1/e01m23.jpg",
                    ]
                },
                {
                    bonusCategory: "Shooting Begins",
                },
                {
                    bonusDesc: "We shot all the therapy room scenes of this series, comprising over 120 pages, over six days in March 2021. Our total cast and crew never exceeded four people, so everyone had to wear a lot of hats!",
                    links: [
                        "..images/ep_1/e01m18_shooting-time.jpg",
                    ],
                },
                {
                    bonusDesc: "The floating tea pot, cup, and saucer were achieved practically.",
                    links: [
                        "https://www.youtube.com/embed/Mz2YrzyT_iU",
                    ]
                },
                {
                    bonusCategory: "The Intro Sequence",
                },
                {
                    bonusDesc: "Determined to hire as few collaborators as possible, Cutler learned After Effects to create the series’ 2D intro sequence. This is Tyler’s initial sketch of their idea:",
                    links: [
                        "..images/ep_1/e01m20_introstoryboard.jpg",
                    ],
                },
                {
                    bonusDesc: "Tyler’s regular collaborator George Bjorvik composed the series’s music.",
                    links: [
                        "https://www.youtube.com/embed/Mz2YrzyT_iU",
                    ]
                }
            ]
        },
        {
            title: "Molly",
            desc: "Molly didn't knit Harry a sweater for Christmas!  Aquila tries to help Harry figure out why.",
            link: "",
            bonusContent: [
                {
                    bonusDesc: "",
                    type: "",
                    link: "",
                }

            ]
        },
        {
            title: "Hogwarts",
            desc: "Harry and Ron investigated a crime at Hogwarts, but tensions flared when the visit went south.  Aquila helps Harry put things in perspective.",
            link: "",
            bonusContent: [
                "",

            ]
        },
        {
            title: "Ministry",
            desc: "Harry's in trouble at work thanks to a risky plan to snare a crime boss and he takes it out on Aquila.  Can she keep her cool?",
            link: "",
            bonusContent: [
                "",

            ]
        },
        {
            title: "Harry",
            desc: "Aquila isn't sure if Harry will ever come back after their nasty fight.",
            link: "",
            bonusContent: [
                "",

            ]
        },
        {
            title: "Dumbledore",
            desc: "Aquila finally lets Harry use the pensieve!  Together, they revisit an upsetting encounter with Dumbledore's portrait.",
            link: "",
            bonusContent: [
                "",

            ]
        },
        {
            title: "James Sirius",
            desc: "Harry Potter is a father!  His new baby forces him to explore his complicated feelings about Sirius Black—plus, Harry finally discovers the identity of the infamous crime boss known as The Jonquil.",
            link: "",
            bonusContent: [
                "",

            ]
        },
    ]
    return {episodes};
})();

const view = (() => {
    const content = document.querySelector(".content");

    const createEpisodeSection = (epNum) => {
        const episodeSection = document.createElement("section");
        const episodeNumberLabel = document.createElement("h3");
        episodeNumberLabel.textContent = `- Episode ${epNum} -`;
        const episodeTitle = document.createElement("h1");
        episodeTitle.textContent = `"${model.episodes[epNum - 1].title}"`;
        const episodeDesc = document.createElement("p");
        episodeDesc.classList.add("episode-desc");
        episodeDesc.textContent = model.episodes[epNum - 1].desc;
        const episodeVideo = document.createElement("iframe");
        episodeVideo.src = model.episodes[epNum - 1].link;
        episodeVideo.frameBorder = 0;
        episodeVideo.classList.add("episode-video");
        const breakdownHeader = document.createElement("h3");
        breakdownHeader.classList.add("section-sub-head");
        breakdownHeader.textContent = "About the episode:";
        const breakdown = document.createElement("p");
        breakdown.textContent = model.episodes[epNum-1].breakdown;

        episodeSection.append(
                episodeNumberLabel,
                episodeTitle,
                episodeDesc,
                episodeVideo,
                breakdownHeader,
                breakdown,
                createBonusContentElements(epNum - 1),
            );
        return episodeSection;
    }
    const createBonusContentElements = (epIndex) => {
        const fragment = document.createDocumentFragment();
        const bonusSectionLabel = document.createElement("h2");
        bonusSectionLabel.textContent = "Bonus Content";
        bonusSectionLabel.classList.add("bonus-section-label");
        fragment.append(bonusSectionLabel);

        if (model.episodes[epIndex].bonusContent.length > 0) {
            model.episodes[epIndex].bonusContent.forEach(bonus => {
                if (!bonus.bonusDesc) {
                    const bonusSubCategory = document.createElement("h3");
                    bonusSubCategory.classList.add("section-sub-head");
                    bonusSubCategory.textContent = bonus.bonusCategory;
                    fragment.append(bonusSubCategory);
                } else {
                    const bonusDesc = document.createElement("p");
                    bonusDesc.classList.add("bonus-desc");
                    bonusDesc.textContent = bonus.bonusDesc;
                    fragment.append(bonusDesc);

                    let bonusItem = "";
                    bonus.links.forEach(link => {
                        if (link.includes("youtube")) {
                            bonusItem = document.createElement("iframe");
                            bonusItem.frameBorder = 0;
                            bonusItem.src = link;
                        } else {
                            bonusItem = document.createElement("img");
                            bonusItem.classList.add("bonus-img");
                            bonusItem.src = link;
                            console.log("it does get here");
                        }
                        fragment.append(bonusItem);
                    })
                    // switch (bonus.type) {
                    //     case "vid":
                            
                    //         break;
                    //     case "img":
                            
                    //         break;
                    // }
                }
            });
        }
        return fragment;
    }
    const clearContent = () => {
        if (content) {
            const contentContainer = document.createRange();
            contentContainer.selectNodeContents(content);
            contentContainer.deleteContents();
        }
    }

    const setup = (() => {
        const episodeGrid = document.querySelector(".episode-grid");
    
        const createEpisodeTab = (num) => {
            const tab = document.createElement("div");
            tab.classList.add("ep-tab");
            if (num === 1) {
                tab.classList.add("ep-tab-active");
            }
            tab.dataset.tab = num;
            tab.textContent = num;
            return tab;
        }
        const createEpisodeGrid = (() => {
            for (let i = 1; i <= 7; i++) {
                episodeGrid.append(createEpisodeTab(i));
            }
        })();
        
        content.append(createEpisodeSection(1));
    })();

    const epTabs = document.querySelectorAll(".ep-tab");
    epTabs.forEach(tab => tab.addEventListener("click", (e) => {
        switchEpisodeTab(e);
    }));
    const switchEpisodeTab = (e) => {
        epTabs.forEach(tab => tab.classList.remove("ep-tab-active"));
        e.target.classList.add("ep-tab-active");
        clearContent();
        content.append(createEpisodeSection(e.target.dataset.tab));
    }

    return {createEpisodeSection};
})();