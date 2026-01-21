// Set last updated date
document.addEventListener('DOMContentLoaded', function() {
    const lastUpdatedElement = document.getElementById('lastUpdated');
    if (lastUpdatedElement) {
        const now = new Date();
        lastUpdatedElement.textContent = `Last updated: ${now.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })}`;
    }

    // Initialize all charts
    initializeCharts();
});

// Toggle details sections
function toggleDetails(id) {
    const element = document.getElementById(id);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}

// Initialize all charts
function initializeCharts() {
    initializeResearchChart();
    initializeRequirementsChart();
    initializeTimelineChart();
    initializeFeatureChart();
    initializeVendorChart();
    initializeDocsChart();
}

// Research Data Distribution Chart
function initializeResearchChart() {
    const ctx = document.getElementById('researchChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Initial Research (28)',
                'Concept Testing (10)',
                'Presentations (3)',
                'LO Interviews (7)',
                'Stakeholder Meetings (5)'
            ],
            datasets: [{
                data: [28, 10, 3, 7, 5],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(20, 184, 166, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(16, 185, 129, 0.8)',
                    'rgba(245, 158, 11, 0.8)'
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(20, 184, 166, 1)',
                    'rgba(139, 92, 246, 1)',
                    'rgba(16, 185, 129, 1)',
                    'rgba(245, 158, 11, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#94a3b8',
                        padding: 15,
                        font: {
                            family: "'Plus Jakarta Sans', sans-serif",
                            size: 11
                        }
                    }
                },
                title: {
                    display: true,
                    text: '53 Total Research Artifacts',
                    color: '#f1f5f9',
                    font: {
                        family: "'Plus Jakarta Sans', sans-serif",
                        size: 14,
                        weight: '600'
                    },
                    padding: {
                        bottom: 10
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 34, 52, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#94a3b8',
                    borderColor: '#334155',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return context.label + ' (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });
}

// Requirements Framework Coverage Chart
function initializeRequirementsChart() {
    const ctx = document.getElementById('requirementsChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'URLA Gap',
                'Data Tasks',
                'Plaid VOA',
                'TRUV VOIE',
                'Prove',
                'OTP',
                'Credit',
                'Invite',
                'LO Config',
                'LO UI',
                'LO Takeover',
                'Submit',
                'Scenarios',
                'AI Assistant'
            ],
            datasets: [{
                label: 'Documentation Complete',
                data: [95, 90, 80, 85, 95, 75, 70, 85, 90, 85, 75, 80, 85, 70],
                backgroundColor: function(context) {
                    const value = context.parsed.x;
                    if (value >= 90) return 'rgba(16, 185, 129, 0.8)'; // Green for 90%+
                    if (value >= 75) return 'rgba(59, 130, 246, 0.8)'; // Blue for 75-89%
                    return 'rgba(245, 158, 11, 0.8)'; // Yellow for <75%
                },
                borderColor: function(context) {
                    const value = context.parsed.x;
                    if (value >= 90) return 'rgba(16, 185, 129, 1)';
                    if (value >= 75) return 'rgba(59, 130, 246, 1)';
                    return 'rgba(245, 158, 11, 1)';
                },
                borderWidth: 2,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(51, 65, 85, 0.3)'
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            family: "'Plus Jakarta Sans', sans-serif"
                        },
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            family: "'Plus Jakarta Sans', sans-serif",
                            size: 11
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 34, 52, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#94a3b8',
                    borderColor: '#334155',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return 'Completion: ' + context.parsed.x + '%';
                        }
                    }
                }
            }
        }
    });
}

// Project Phase Timeline Chart
function initializeTimelineChart() {
    const ctx = document.getElementById('timelineChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                'Nov 2025',
                'Dec 2025',
                'Jan 2026',
                'Feb 2026',
                'Mar 2026',
                'Apr 2026',
                'May 2026',
                'Jun 2026'
            ],
            datasets: [
                {
                    label: 'Discovery & Research',
                    data: [60, 100, 100, 80, 40, 20, 10, 0],
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(59, 130, 246, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4
                },
                {
                    label: 'Requirements & Planning',
                    data: [0, 40, 90, 100, 70, 30, 10, 0],
                    borderColor: 'rgba(20, 184, 166, 1)',
                    backgroundColor: 'rgba(20, 184, 166, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(20, 184, 166, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4
                },
                {
                    label: 'Prototype & Validation',
                    data: [0, 20, 80, 100, 80, 40, 10, 0],
                    borderColor: 'rgba(245, 158, 11, 1)',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(245, 158, 11, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4
                },
                {
                    label: 'Development Phase 1',
                    data: [0, 0, 10, 40, 80, 100, 90, 60],
                    borderColor: 'rgba(139, 92, 246, 1)',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(139, 92, 246, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4
                },
                {
                    label: 'Integration & Testing',
                    data: [0, 0, 0, 10, 30, 60, 90, 100],
                    borderColor: 'rgba(16, 185, 129, 1)',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: 'rgba(16, 185, 129, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            interaction: {
                mode: 'index',
                intersect: false
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(51, 65, 85, 0.3)'
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            family: "'Plus Jakarta Sans', sans-serif"
                        }
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(51, 65, 85, 0.3)'
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            family: "'Plus Jakarta Sans', sans-serif"
                        },
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#94a3b8',
                        padding: 15,
                        font: {
                            family: "'Plus Jakarta Sans', sans-serif",
                            size: 12
                        },
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 34, 52, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#94a3b8',
                    borderColor: '#334155',
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.parsed.y + '% effort';
                        }
                    }
                }
            }
        }
    });
}

// Feature Prioritization Chart (P0/P1/P2)
function initializeFeatureChart() {
    const ctx = document.getElementById('featureChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['P0 - Critical (12)', 'P1 - High Priority (19)', 'P2 - Future (24)'],
            datasets: [{
                data: [12, 19, 24],
                backgroundColor: [
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(245, 158, 11, 0.8)',
                    'rgba(59, 130, 246, 0.8)'
                ],
                borderColor: [
                    'rgba(239, 68, 68, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(59, 130, 246, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#94a3b8',
                        padding: 15,
                        font: {
                            family: "'Plus Jakarta Sans', sans-serif",
                            size: 11
                        }
                    }
                },
                title: {
                    display: true,
                    text: '55 Total Features Scoped',
                    color: '#f1f5f9',
                    font: {
                        family: "'Plus Jakarta Sans', sans-serif",
                        size: 14,
                        weight: '600'
                    },
                    padding: {
                        bottom: 10
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 34, 52, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#94a3b8',
                    borderColor: '#334155',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return context.label + ' (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });
}

// Vendor Integration Status Chart
function initializeVendorChart() {
    const ctx = document.getElementById('vendorChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Prove', 'FlueID', 'Solex', 'Truv', 'Plaid', 'Credit API', 'LOS', 'Claude AI'],
            datasets: [{
                label: 'Integration Progress',
                data: [85, 70, 60, 55, 50, 40, 30, 75],
                backgroundColor: function(context) {
                    const value = context.parsed.y;
                    if (value >= 75) return 'rgba(16, 185, 129, 0.8)'; // Green
                    if (value >= 50) return 'rgba(245, 158, 11, 0.8)'; // Yellow
                    return 'rgba(239, 68, 68, 0.8)'; // Red
                },
                borderColor: function(context) {
                    const value = context.parsed.y;
                    if (value >= 75) return 'rgba(16, 185, 129, 1)';
                    if (value >= 50) return 'rgba(245, 158, 11, 1)';
                    return 'rgba(239, 68, 68, 1)';
                },
                borderWidth: 2,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(51, 65, 85, 0.3)'
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            family: "'Plus Jakarta Sans', sans-serif"
                        },
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#94a3b8',
                        font: {
                            family: "'Plus Jakarta Sans', sans-serif",
                            size: 11
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: '8 Vendor Integrations Planned',
                    color: '#f1f5f9',
                    font: {
                        family: "'Plus Jakarta Sans', sans-serif",
                        size: 14,
                        weight: '600'
                    },
                    padding: {
                        bottom: 10
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 34, 52, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#94a3b8',
                    borderColor: '#334155',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            const statuses = {
                                85: 'POC Complete',
                                70: 'Research Complete',
                                60: 'Scoped',
                                55: 'Scoped',
                                50: 'Scoped',
                                40: 'Vendor TBD',
                                30: 'System TBD',
                                75: 'Ready'
                            };
                            return context.parsed.y + '% - ' + (statuses[context.parsed.y] || 'In Progress');
                        }
                    }
                }
            }
        }
    });
}

// Documentation Completion by Section Chart
function initializeDocsChart() {
    const ctx = document.getElementById('docsChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: [
                'Requirements (14)',
                'Research (6)',
                'Documents (4)',
                'Integrations (6)',
                'Scoping (5)',
                'Utilities (5)',
                'Claude Guide (5)'
            ],
            datasets: [{
                data: [95, 100, 100, 85, 75, 90, 100],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(20, 184, 166, 0.7)',
                    'rgba(139, 92, 246, 0.7)',
                    'rgba(245, 158, 11, 0.7)',
                    'rgba(236, 72, 153, 0.7)',
                    'rgba(14, 165, 233, 0.7)'
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(16, 185, 129, 1)',
                    'rgba(20, 184, 166, 1)',
                    'rgba(139, 92, 246, 1)',
                    'rgba(245, 158, 11, 1)',
                    'rgba(236, 72, 153, 1)',
                    'rgba(14, 165, 233, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: '#94a3b8',
                        backdropColor: 'transparent',
                        font: {
                            family: "'Plus Jakarta Sans', sans-serif"
                        },
                        callback: function(value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(51, 65, 85, 0.3)'
                    },
                    pointLabels: {
                        color: '#94a3b8',
                        font: {
                            family: "'Plus Jakarta Sans', sans-serif",
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: '45 Pages Across 7 Sections',
                    color: '#f1f5f9',
                    font: {
                        family: "'Plus Jakarta Sans', sans-serif",
                        size: 14,
                        weight: '600'
                    },
                    padding: {
                        bottom: 10
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(26, 34, 52, 0.95)',
                    titleColor: '#f1f5f9',
                    bodyColor: '#94a3b8',
                    borderColor: '#334155',
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed.r + '% Complete';
                        }
                    }
                }
            }
        }
    });
}

// Add smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add analytics tracking for tile clicks
document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('click', function(e) {
        const title = this.querySelector('.tile-title')?.textContent || 'Unknown';
        console.log('Tile clicked:', title);
        // You can add actual analytics here (Google Analytics, Mixpanel, etc.)
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search (if you add search later)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        console.log('Search shortcut triggered');
        // Add search functionality here
    }
});

// Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
