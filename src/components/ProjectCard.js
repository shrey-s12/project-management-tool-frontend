import React from 'react';

const ProjectCard = ({ project }) => {
    // Convert deadline to a Date object if it's a string
    const deadlineDate = new Date(project.deadline);

    // Format deadline as YYYY-MM-DD
    const formattedDeadline = deadlineDate.toISOString().split('T')[0];

    return (
        <div className="bg-white p-4 border rounded-lg shadow">
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p>{project.description}</p>
            <p className="text-gray-600">Deadline: {formattedDeadline}</p>
            <p className="text-gray-600">Manager: {project.manager}</p>
        </div>
    );
};

export default ProjectCard;
