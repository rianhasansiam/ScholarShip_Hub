import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, BarChart, Bar, ResponsiveContainer
} from 'recharts';
import axios from 'axios';

const AnalyticsCharts = () => {
  const [applicationsData, setApplicationsData] = useState([]);
  const [applicationsByCategory, setApplicationsByCategory] = useState([]);
  const [applicationsByStatus, setApplicationsByStatus] = useState([]);
  const [applicationsByUniversity, setApplicationsByUniversity] = useState([]);

  // Fetching the analytics data from API
  useEffect(() => {
    axios.get('https://assignment-12-server-ruddy-eight.vercel.app/api/applications/analytics')
      .then((response) => {
        const { data } = response;
        setApplicationsData(data.applicationsOverTime);
        setApplicationsByCategory(data.applicationsByCategory);
        setApplicationsByStatus(data.applicationsByStatus);
        setApplicationsByUniversity(data.applicationsByUniversity);
      })
      .catch((error) => {
        console.error("Error fetching analytics data:", error);
      });
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard Analytics</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Applications Over Time */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Applications Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={applicationsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="count" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Applications by Category */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Applications by Scholarship Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={applicationsByCategory} dataKey="count" nameKey="category" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                {applicationsByCategory.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Applications by Status */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Applications by Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={applicationsByStatus}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="status" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Applications by University */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Applications by University</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={applicationsByUniversity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="university" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#0088FE" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCharts;
