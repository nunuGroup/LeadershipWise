import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LearningTimeline from '../views/LearningTimeline.vue'
import PerformanceAnalysis from '../views/PerformanceAnalysis.vue'
import MonthlyStats from '../views/MonthlyStats.vue'
import TeamOrganization from '../views/TeamOrganization.vue'
import Results from '../views/Results.vue'
import EmployeeAnalysis from '../views/EmployeeAnalysis.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/learning_timeline',
    name: 'LearningTimeline',
    component: LearningTimeline
  },
  {
    path: "/performance_analysis",
    name: "PerformanceAnalysis",
    component: PerformanceAnalysis
  },
  {
    path: "/monthly_stats",
    name: "MonthlyStats",
    component: MonthlyStats
  },
  {
    path: "/team_organization",
    name: "TeamOrganization",
    component: TeamOrganization
  },
  {
    path: "/results",
    name: "/Results",
    component: Results
  },
  {
    path: "/employee_analysis",
    name: "EmployeeAnalysis",
    component: EmployeeAnalysis
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
