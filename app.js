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
}

// Research Data Distribution Chart
function initializeResearchChart() {
    const ctx = document.getElementById('researchChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'LO Interviews (7)',
                'Product/Dev Interviews (6)',
                'Concept Testing (4)',
                'Presentations (3)'
            ],
            datasets: [{
                data: [7, 6, 4, 3],
                backgroundColor: [
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(20, 184, 166, 0.8)',
                    'rgba(139, 92, 246, 0.8)',
                    'rgba(16, 185, 129, 0.8)'
                ],
                borderColor: [
                    'rgba(59, 130, 246, 1)',
                    'rgba(20, 184, 166, 1)',
                    'rgba(139, 92, 246, 1)',
                    'rgba(16, 185, 129, 1)'
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
                            size: 12
                        }
                    }
                },
                title: {
                    display: false
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
                label: 'Completion %',
                data: [90, 85, 75, 70, 95, 80, 75, 85, 90, 80, 70, 75, 85, 60],
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                borderColor: 'rgba(59, 130, 246, 1)',
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
                'May 2026'
            ],
            datasets: [
                {
                    label: 'Research & Discovery',
                    data: [100, 100, 90, 50, 10, 0, 0],
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Design & Prototyping',
                    data: [0, 30, 80, 100, 90, 60, 20],
                    borderColor: 'rgba(20, 184, 166, 1)',
                    backgroundColor: 'rgba(20, 184, 166, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Development',
                    data: [0, 0, 20, 50, 90, 100, 90],
                    borderColor: 'rgba(139, 92, 246, 1)',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Testing & QA',
                    data: [0, 0, 0, 10, 40, 80, 100],
                    borderColor: 'rgba(16, 185, 129, 1)',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
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
