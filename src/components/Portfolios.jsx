import React from 'react';

function Portfolios() {
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'This is the first project description.',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'This is the second project description.',
            image: 'https://via.placeholder.com/150',
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'This is the third project description.',
            image: 'https://via.placeholder.com/150',
        },
    ];

    return (
        <div className="mt-16">
            <div className="w-full flex flex-col gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-zinc-900 w-full h-auto md:h-[60vh] lg:h-[70vh] rounded-2xl relative"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover rounded-[2rem] p-4 md:p-6 lg:p-10"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolios;
