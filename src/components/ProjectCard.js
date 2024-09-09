import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project, onDelete }) => {
    const navigate = useNavigate();

    // Convert deadline to a Date object if it's a string
    const deadlineDate = new Date(project.deadline);

    // Format deadline as YYYY-MM-DD
    const formattedDeadline = deadlineDate.toISOString().split('T')[0];

    // Handle Delete Button Click using .then() and .catch()
    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this project?");
        if (!confirmDelete) return;

        fetch(`http://localhost:3020/projects/deleteProject/${project._id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    // Call onDelete callback to refresh the project list
                    onDelete(project._id);
                } else {
                    throw new Error('Failed to delete project');
                }
            })
            .catch((error) => {
                console.error('Error deleting project:', error);
            });
    };

    // Truncate title and description if they exceed the max length
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    // Handle redirection to project details page
    const handleViewDetails = () => {
        navigate(`/projects/${project._id}`);
    };

    return (
        <div className="bg-white p-4 border rounded-lg shadow">
            <h3 className="text-xl font-bold">
                {truncateText(project.name, 25)} {/* Limit title to 20 characters */}
            </h3>
            <p>{truncateText(project.description, 45)} {/* Limit description to 100 characters */}</p>
            <p className="text-gray-600">Deadline: {formattedDeadline}</p>
            <p className="text-gray-600">Manager: {project.manager}</p>

            <div className="mt-4 flex space-x-4">
                {/* Detail Button */}
                <button
                    onClick={handleViewDetails}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                    View Details
                </button>

                {/* Delete Button */}
                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                    Delete Project
                </button>

            </div>
        </div>
    );
};

export default ProjectCard;
