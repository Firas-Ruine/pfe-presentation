"use client"

import React from "react"
import { useCallback, useState, useEffect } from "react"

import * as XYFlowModule from "@xyflow/react"
import "@xyflow/react/dist/style.css"

const ReactFlow = XYFlowModule.ReactFlow || XYFlowModule
const MiniMap = XYFlowModule.MiniMap
const Controls = XYFlowModule.Controls
const Background = XYFlowModule.Background
const BackgroundVariant = XYFlowModule.BackgroundVariant
const useNodesState = XYFlowModule.useNodesState
const useEdgesState = XYFlowModule.useEdgesState
const addEdge = XYFlowModule.addEdge
const Position = XYFlowModule.Position
const MarkerType = XYFlowModule.MarkerType
type RFNode = XYFlowModule.Node
type RFEdge = XYFlowModule.Edge

import {
    Users,
    Database,
    Share2,
    Eye,
    Bell,
    Smartphone,
    Layers,
    Gauge,
    Webhook,
    Ship,
    Workflow,
    MonitorPlay,
    GitBranch,
    TestTube,
    Code2,
    ShieldCheck,
    MessageSquare,
    Container,
    DatabaseZap,
    Layers3,
    FileText,
    Cpu,
    Apple,
    Globe,
    Server,
    Zap,
} from "lucide-react"
import SlideWrapper from "../../slide-wrapper"
import SlideHeader from "../../slide-header"

// Enhanced NodeLabel with status indicators and animations
const NodeLabel = ({
    icon,
    text,
    iconBgClass,
    iconColorClass,
    status,
    subtitle,
}: {
    icon: React.ReactNode
    text: string
    iconBgClass: string
    iconColorClass: string
    status?: 'active' | 'processing' | 'success' | 'warning' | 'error'
    subtitle?: string
}) => (
    <div className="flex flex-col items-center justify-center text-center space-y-1.5 p-2 transition-all duration-300 hover:scale-105">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBgClass} shadow-md relative transition-all duration-300`}>
            <div className={iconColorClass}>
                {React.isValidElement(icon) 
                    ? React.cloneElement(icon as React.ReactElement<any>, { size: 20 })
                    : icon
                }
            </div>
            {status && (
                <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
                    status === 'active' ? 'bg-green-400 animate-pulse' :
                    status === 'processing' ? 'bg-blue-400 animate-spin' :
                    status === 'success' ? 'bg-green-500' :
                    status === 'warning' ? 'bg-yellow-400 animate-pulse' :
                    status === 'error' ? 'bg-red-500 animate-bounce' : ''
                }`} />
            )}
        </div>
        <div className="space-y-0.5">
            <span className="text-xs font-semibold text-slate-800 leading-tight max-w-[120px] block">{text}</span>
            {subtitle && (
                <span className="text-xs text-slate-500 leading-tight max-w-[120px] block">{subtitle}</span>
            )}
        </div>
    </div>
)

// Enhanced Node Defaults with animations and better styling
const nodeDefaults = {
    sourcePosition: Position?.Right || "right",
    targetPosition: Position?.Left || "left",
    style: {
        borderRadius: "0.75rem",
        borderWidth: "2px",
        borderColor: "#e5e7eb",
        backgroundColor: "#ffffff",
        padding: "0px",
        fontSize: "12px",
        width: 160,
        minHeight: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        transition: "all 0.3s ease-in-out",
    },
    className: "diagram-node modern-node hover:shadow-lg hover:-translate-y-1",
}

// Enhanced Group Node Styles with better visual hierarchy
const groupNodeStyleBase = {
    borderRadius: "1.5rem",
    borderWidth: "2px",
    borderStyle: "solid",
    backgroundColor: "rgba(248, 250, 252, 0.8)",
    padding: "20px",
    paddingTop: "60px",
    pointerEvents: "none" as const,
    backdropFilter: "blur(10px)",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
}

const initialNodes: RFNode[] = [
    // =============================================================================
    // 1. DEVELOPMENT & CI/CD GROUP (Left Side)
    // =============================================================================
    {
        id: "devops-group",
        type: "default",
        data: {
            label: (
                <div className="absolute -top-8 left-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-white">
                    🚀 Development & CI/CD Pipeline
                </div>
            ),
        },
        position: { x: -1300, y: -50 },
        style: { 
            ...groupNodeStyleBase, 
            width: 800, 
            height: 1000, 
            borderColor: "#fb7185",
            background: "linear-gradient(135deg, rgba(251, 113, 133, 0.15) 0%, rgba(244, 114, 182, 0.15) 100%)",
            borderWidth: "3px",
        },
        zIndex: -1,
        draggable: false,
    },

    // Development Layer
    {
        id: "developer",
        type: "input",
        data: {
            label: (
                <NodeLabel 
                    icon={<Users />} 
                    text="Developer" 
                    iconBgClass="bg-rose-100" 
                    iconColorClass="text-rose-600"
                    status="active"
                    subtitle="Code Development"
                />
            ),
        },
        position: { x: -1290, y: 20 },
        parentNode: "devops-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#fb7185",
            background: "linear-gradient(135deg, #ffffff 0%, #fef7f7 100%)",
        },
    },
    {
        id: "captain-hook",
        data: {
            label: (
                <NodeLabel
                    icon={<Zap />}
                    text="Captain Hook"
                    iconBgClass="bg-rose-100"
                    iconColorClass="text-rose-600"
                    status="processing"
                    subtitle="Pre-commit Hooks"
                />
            ),
        },
        position: { x: -1000, y: 20 },
        parentNode: "devops-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#fb7185",
            background: "linear-gradient(135deg, #ffffff 0%, #fef7f7 100%)",
        },

    },

    // Source Control Layer
    {
        id: "bitbucket-repo",
        data: {
            label: (
                <NodeLabel
                    icon={<GitBranch />}
                    text="Bitbucket Repository"
                    iconBgClass="bg-slate-100"
                    iconColorClass="text-slate-600"
                    status="success"
                    subtitle="Source Control"
                />
            ),
        },
        position: { x: -710, y: 20 },
        parentNode: "devops-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#64748b",
            background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        },

    },

    // CI/CD Pipeline Layer
    {
        id: "bitbucket-pipelines",
        data: {
            label: (
                <NodeLabel
                    icon={<Workflow />}
                    text="CI/CD Pipeline"
                    iconBgClass="bg-blue-100"
                    iconColorClass="text-blue-600"
                    status="processing"
                    subtitle="Build & Deploy"
                />
            ),
        },
        position: { x: -1290, y: 250 },
        parentNode: "devops-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#3b82f6",
            background: "linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)",
        },

    },

    // Quality & Testing Layer
    {
        id: "pest",
        data: {
            label: (
                <NodeLabel 
                    icon={<TestTube />} 
                    text="Pest Testing" 
                    iconBgClass="bg-green-100" 
                    iconColorClass="text-green-600"
                    status="success"
                    subtitle="Unit & Feature Tests"
                />
            ),
        },
        position: { x: -1290, y: 650 },
        parentNode: "devops-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#10b981",
            background: "linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)",
        },

    },
    {
        id: "sonarqube",
        data: {
            label: (
                <NodeLabel 
                    icon={<Code2 />} 
                    text="SonarQube" 
                    iconBgClass="bg-purple-100" 
                    iconColorClass="text-purple-600"
                    status="success"
                    subtitle="Code Quality"
                />
            ),
        },
        position: { x: -950, y: 420 },
        parentNode: "devops-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#8b5cf6",
            background: "linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)",
        },

    },
    {
        id: "trivy",
        data: {
            label: (
                <NodeLabel 
                    icon={<ShieldCheck />} 
                    text="Trivy Scanner" 
                    iconBgClass="bg-red-100" 
                    iconColorClass="text-red-600"
                    status="success"
                    subtitle="Security Scan"
                />
            ),
        },
        position: { x: -700, y: 400 },
        parentNode: "devops-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#ef4444",
            background: "linear-gradient(135deg, #ffffff 0%, #fef2f2 100%)",
        },

    },

    // Mobile Build Layer
    {
        id: "eas",
        data: {
            label: (
                <NodeLabel 
                    icon={<Smartphone />} 
                    text="EAS Build" 
                    iconBgClass="bg-cyan-100" 
                    iconColorClass="text-cyan-600"
                    status="processing"
                    subtitle="Mobile App Build"
                />
            ),
        },
        position: { x: -700, y: 230 },
        parentNode: "devops-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#06b6d4",
            background: "linear-gradient(135deg, #ffffff 0%, #ecfeff 100%)",
        },

    },

    {
        id: "k6",
        data: {
            label: (
                <NodeLabel 
                    icon={<TestTube />} 
                    text="Grafana K6" 
                    iconBgClass="bg-cyan-100" 
                    iconColorClass="text-cyan-600"
                    status="processing"
                    subtitle="Load Testing"
                />
            ),
        },
        position: { x: -900, y: 650 },
        parentNode: "devops-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#a16207",
            background: "linear-gradient(135deg, #ffffff 0%, #fef3c7 100%)",
        },

    },

    // GitOps Layer
    {
        id: "k8s-manifests",
        data: {
            label: (
                <NodeLabel
                    icon={<FileText />}
                    text="K8s Manifests"
                    iconBgClass="bg-indigo-100"
                    iconColorClass="text-indigo-600"
                    status="active"
                    subtitle="Infrastructure as Code"
                />
            ),
        },
        position: { x: -1100, y: 600 },
        parentNode: "devops-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#6366f1",
            background: "linear-gradient(135deg, #ffffff 0%, #eef2ff 100%)",
        },

    },
    {
        id: "argo-cd",
        data: {
            label: (
                <NodeLabel 
                    icon={<Ship />} 
                    text="ArgoCD" 
                    iconBgClass="bg-emerald-100" 
                    iconColorClass="text-emerald-600"
                    status="active"
                    subtitle="GitOps Deployment"
                />
            ),
        },
        position: { x: -1030, y: 800 },
        parentNode: "devops-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#10b981",
            background: "linear-gradient(135deg, #ffffff 0%, #ecfdf5 100%)",
        },

    },

    // =============================================================================
    // 2. KUBERNETES CLUSTER GROUP (Center)
    // =============================================================================
    {
        id: "k8s-group",
        type: "default",
        data: {
            label: (
                <div className="absolute -top-8 left-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-white">
                    ☸️ Kubernetes Cluster
                </div>
            ),
        },
        position: { x: -400, y: -50 },
        style: { 
            ...groupNodeStyleBase, 
            width: 800, 
            height: 1000, 
            borderColor: "#3b82f6",
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",
            borderWidth: "3px",
        },        zIndex: -1,
        draggable: true,
    },

    // Management Layer
    {
        id: "portainer",
        data: {
            label: (
                <NodeLabel 
                    icon={<Server />} 
                    text="Portainer" 
                    iconBgClass="bg-blue-100" 
                    iconColorClass="text-blue-600"
                    status="active"
                    subtitle="Container Management"
                />
            ),
        },
        position: { x: -390, y: 20 },
        parentNode: "k8s-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#3b82f6",
            background: "linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)",
        },

    },

    // Application Services Layer
    {
        id: "api-laravel",
        data: {
            label: (
                <NodeLabel
                    icon={<Layers />}
                    text="Laravel API"
                    iconBgClass="bg-blue-100"
                    iconColorClass="text-blue-600"
                    status="active"
                    subtitle="Main API Service"
                />
            ),
        },
        position: { x: -80, y: 0 },
        parentNode: "k8s-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#3b82f6",
            background: "linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)",
        },

    },
    {
        id: "ms-alertes",
        data: {
            label: (
                <NodeLabel
                    icon={<Bell />}
                    text="Alerts Service"
                    iconBgClass="bg-blue-100"
                    iconColorClass="text-blue-600"
                    status="active"
                    subtitle="Alert Management"
                />
            ),
        },
        position: { x: -390, y: 500 },
        parentNode: "k8s-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#3b82f6",
            background: "linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)",
        },

    },
    {
        id: "ms-notifs",
        data: {
            label: (
                <NodeLabel
                    icon={<Bell />}
                    text="Notifications Service"
                    iconBgClass="bg-blue-100"
                    iconColorClass="text-blue-600"
                    status="active"
                    subtitle="Push Notifications"
                />
            ),
        },
        position: { x: 230, y: 500 },
        parentNode: "k8s-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#3b82f6",
            background: "linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)",
        },

    },

    // Data Layer
    {
        id: "pg-alertes",
        data: {
            label: (
                <NodeLabel
                    icon={<Database />}
                    text="PostgreSQL"
                    iconBgClass="bg-sky-100"
                    iconColorClass="text-sky-600"
                    status="active"
                    subtitle="Alerts Database"
                />
            ),
        },
        position: { x: -390, y: 750 },
        parentNode: "k8s-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#0ea5e9",
            background: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
        },

    },
    {
        id: "mariadb",
        data: {
            label: (
                <NodeLabel 
                    icon={<DatabaseZap />} 
                    text="MariaDB" 
                    iconBgClass="bg-sky-100" 
                    iconColorClass="text-sky-600"
                    status="active"
                    subtitle="Main Database"
                />
            ),
        },
        position: { x: 150, y: 200 },
        parentNode: "k8s-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#0ea5e9",
            background: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
        },

    },
    {
        id: "pg-notifs",
        data: {
            label: (
                <NodeLabel
                    icon={<Database />}
                    text="PostgreSQL"
                    iconBgClass="bg-sky-100"
                    iconColorClass="text-sky-600"
                    status="active"
                    subtitle="Notifications DB"
                />
            ),
        },
        position: { x: 230, y: 750 },
        parentNode: "k8s-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#0ea5e9",
            background: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
        },

    },

    // Message Broker & Cache Layer
    {
        id: "rabbitmq",
        data: {
            label: (
                <NodeLabel
                    icon={<Share2 />}
                    text="RabbitMQ"
                    iconBgClass="bg-orange-100"
                    iconColorClass="text-orange-600"
                    status="active"
                    subtitle="Message Broker"
                />
            ),
        },
        position: { x: -70, y: 480 },
        parentNode: "k8s-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#f97316",
            background: "linear-gradient(135deg, #ffffff 0%, #fff7ed 100%)",
        },

    },
    {
        id: "redis",
        data: {
            label: (
                <NodeLabel
                    icon={<Layers3 />}
                    text="Redis Cluster"
                    iconBgClass="bg-red-100"
                    iconColorClass="text-red-600"
                    status="active"
                    subtitle="Cache & Sessions"
                />
            ),
        },
        position: { x: 230, y: 20 },
        parentNode: "k8s-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#ef4444",
            background: "linear-gradient(135deg, #ffffff 0%, #fef2f2 100%)",
        },

    },

    // =============================================================================
    // 3. OBSERVABILITY & MONITORING GROUP (Top Right)
    // =============================================================================
    {
        id: "obs-group",
        type: "default",
        data: {
            label: (
                <div className="absolute -top-8 left-6 bg-gradient-to-r from-violet-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-white">
                    👁️ Observability & Monitoring
                </div>
            ),
        },
        position: { x: 580, y: -50 },
        style: { 
            ...groupNodeStyleBase, 
            width: 600, 
            height: 550, 
            borderColor: "#8b5cf6",
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
            borderWidth: "3px",
        },        zIndex: -1,
        draggable: false,
    },

    // Error Tracking & Automation
    {
        id: "sentry",
        data: {
            label: (
                <NodeLabel 
                    icon={<Eye />} 
                    text="Sentry" 
                    iconBgClass="bg-violet-100" 
                    iconColorClass="text-violet-600"
                    status="active"
                    subtitle="Error Tracking"
                />
            ),
        },
        position: { x: 900, y: -20 },
        parentNode: "obs-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#8b5cf6",
            background: "linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)",
        },

    },
    {
        id: "n8n",
        data: {
            label: (
                <NodeLabel 
                    icon={<Share2 />} 
                    text="n8n Automation" 
                    iconBgClass="bg-violet-100" 
                    iconColorClass="text-violet-600"
                    status="processing"
                    subtitle="Workflow Automation"
                />
            ),
        },
        position: { x: 620, y: 340 },
        parentNode: "obs-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#8b5cf6",
            background: "linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)",
        },

    },

    // Metrics & Logs
    {
        id: "prometheus",
        data: {
            label: (
                <NodeLabel 
                    icon={<Gauge />} 
                    text="Prometheus" 
                    iconBgClass="bg-violet-100" 
                    iconColorClass="text-violet-600"
                    status="active"
                    subtitle="Metrics Collection"
                />
            ),
        },
        position: { x: 800, y: 160 },
        parentNode: "obs-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#8b5cf6",
            background: "linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)",
        },

    },
    {
        id: "loki",
        data: {
            label: (
                <NodeLabel 
                    icon={<Layers3 />} 
                    text="Loki" 
                    iconBgClass="bg-violet-100" 
                    iconColorClass="text-violet-600"
                    status="active"
                    subtitle="Log Aggregation"
                />
            ),
        },
        position: { x: 1010, y: 160 },
        parentNode: "obs-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#8b5cf6",
            background: "linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)",
        },

    },

    // Visualization & Alerting
    {
        id: "grafana",
        data: {
            label: (
                <NodeLabel 
                    icon={<MonitorPlay />} 
                    text="Grafana" 
                    iconBgClass="bg-violet-100" 
                    iconColorClass="text-violet-600"
                    status="active"
                    subtitle="Dashboards & Alerts"
                />
            ),
        },
        position: { x: 1010, y: 340 },
        parentNode: "obs-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#8b5cf6",
            background: "linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)",
        },

    },
    {
        id: "discord",
        data: {
            label: (
                <NodeLabel
                    icon={<MessageSquare />}
                    text="Discord"
                    iconBgClass="bg-violet-100"
                    iconColorClass="text-violet-600"
                    status="active"
                    subtitle="Team Notifications"
                />
            ),
        },
        position: { x: 600, y: 160 },
        parentNode: "obs-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#8b5cf6",
            background: "linear-gradient(135deg, #ffffff 0%, #faf5ff 100%)",
        },

    },

    // =============================================================================
    // 4. EXTERNAL SERVICES GROUP (Bottom Right)
    // =============================================================================
    {
        id: "ext-group",
        type: "default",
        data: {
            label: (
                <div className="absolute -top-8 left-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-white">
                    🌐 External Services & Mobile
                </div>
            ),
        },
        position: { x: 580, y: 550 },
        style: { 
            ...groupNodeStyleBase, 
            width: 600, 
            height: 400, 
            borderColor: "#f59e0b",
            background: "linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(251, 146, 60, 0.1) 100%)",
            borderWidth: "3px",
        },        zIndex: -1,
        draggable: false,
    },

    // Push Notification Services
    {
        id: "fcm",
        data: {
            label: (
                <NodeLabel 
                    icon={<Webhook />} 
                    text="Firebase FCM" 
                    iconBgClass="bg-amber-100" 
                    iconColorClass="text-amber-600"
                    status="active"
                    subtitle="Android Push"
                />
            ),
        },
        position: { x: 700, y: 600 },
        parentNode: "ext-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#f59e0b",
            background: "linear-gradient(135deg, #ffffff 0%, #fffbeb 100%)",
        },

    },
    {
        id: "apns",
        data: {
            label: (
                <NodeLabel 
                    icon={<Apple />} 
                    text="Apple APNs" 
                    iconBgClass="bg-amber-100" 
                    iconColorClass="text-amber-600"
                    status="active"
                    subtitle="iOS Push"
                />
            ),
        },
        position: { x: 950, y: 600 },
        parentNode: "ext-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#f59e0b",
            background: "linear-gradient(135deg, #ffffff 0%, #fffbeb 100%)",
        },

    },

    // Mobile Application & External APIs
    {
        id: "app-mobile",
        data: {
            label: (
                <NodeLabel
                    icon={<Smartphone />}
                    text="Mobile App"
                    iconBgClass="bg-amber-100"
                    iconColorClass="text-amber-600"
                    status="active"
                    subtitle="React Native"
                />
            ),
        },
        position: { x: 850, y: 800 },
        parentNode: "ext-group",
        style: {
            ...nodeDefaults.style,
            borderColor: "#f59e0b",
            background: "linear-gradient(135deg, #ffffff 0%, #fffbeb 100%)",
        },

    },
]

// Enhanced Edge Styling with better visual hierarchy and animations
const edgeStyles = {
    // Primary workflow connections (thick, animated)
    primary: {
        strokeWidth: 3,
        stroke: "#3b82f6",
        strokeDasharray: "8,4",
        animation: "flow 2s ease-in-out infinite",
    },
    // Data flow connections (medium, solid)
    dataFlow: {
        strokeWidth: 2,
        stroke: "#6366f1",
        strokeDasharray: "none",
    },
    // Service interactions (thin, dashed)
    interaction: {
        strokeWidth: 1.5,
        stroke: "#8b5cf6",
        strokeDasharray: "4,4",
    },
    // Monitoring connections (dotted)
    monitoring: {
        strokeWidth: 1.5,
        stroke: "#f59e0b",
        strokeDasharray: "2,6",
    },
    // External API connections (gradient effect)
    external: {
        strokeWidth: 2,
        stroke: "#10b981",
        strokeDasharray: "6,2",
    },
    errorTracking: {
        strokeWidth: 2,
        stroke: "#ef4444",
        strokeDasharray: "2,4",
    },
}

const edgeLabelStyle = { 
    fontSize: "11px", 
    fill: "#475569", 
    fontWeight: "600",
    background: "rgba(255,255,255,0.9)",
    padding: "2px 6px",
    borderRadius: "4px",
    border: "1px solid #e2e8f0"
}

const initialEdges: RFEdge[] = [
    // =============================================================================
    // 1. DEVELOPMENT & CI/CD WORKFLOW (Primary Flow)
    // =============================================================================
    {
        id: "e1-dev-hook",
        source: "developer",
        target: "captain-hook",
        label: "📝 Pre-commit Hooks",
        animated: true,
        type: "smoothstep",
        style: edgeStyles.primary,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#3b82f6" },
        labelStyle: edgeLabelStyle,
    },
    {
        id: "e2-hook-repo",
        source: "captain-hook",
        target: "bitbucket-repo",
        label: "⬆️ Push Code",
        animated: true,
        type: "smoothstep",
        style: edgeStyles.primary,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#3b82f6" },
        labelStyle: edgeLabelStyle,
    },
    {
        id: "e3-repo-pipeline",
        source: "bitbucket-repo",
        target: "bitbucket-pipelines",
        label: "🚀 Trigger CI/CD",
        animated: true,
        type: "smoothstep",
        style: edgeStyles.primary,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#3b82f6" },
        labelStyle: edgeLabelStyle,
    },

    // CI/CD Pipeline Branches
    {
        id: "e4-pipeline-eas",
        source: "bitbucket-pipelines",
        target: "eas",
        label: "📱 Build Mobile",
        style: edgeStyles.dataFlow,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" },
        labelStyle: edgeLabelStyle,
    },
    {
        id: "e5-pipeline-pest",
        source: "bitbucket-pipelines",
        target: "pest",
        label: "🧪 Run Tests",
        style: edgeStyles.dataFlow,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" },
        labelStyle: edgeLabelStyle,
    },
    {
        id: "e6-pipeline-sonar",
        source: "bitbucket-pipelines",
        target: "sonarqube",
        label: "🔍 Code Quality",
        style: edgeStyles.dataFlow,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" },
        labelStyle: edgeLabelStyle,
    },
    {
        id: "e7-pipeline-trivy",
        source: "bitbucket-pipelines",
        target: "trivy",
        label: "🛡️ Security Scan",
        style: edgeStyles.dataFlow,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" },
        labelStyle: edgeLabelStyle,
    },
    
    {
        id: "e8-pipeline-k6",
        source: "bitbucket-pipelines",
        target: "k6",
        label: "📊 Load Testing",
        style: edgeStyles.dataFlow,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" },
        labelStyle: edgeLabelStyle,
    },

    // GitOps Deployment Flow
    {
        id: "e8-pipeline-manifests",
        source: "bitbucket-pipelines",
        target: "k8s-manifests",
        label: "📄 Update Manifests",
        style: edgeStyles.dataFlow,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" },
        labelStyle: edgeLabelStyle,
    },
    {
        id: "e9-argo-manifests",
        source: "argo-cd",
        target: "k8s-manifests",
        label: "👀 Watch Changes",
        style: edgeStyles.interaction,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" },
        labelStyle: edgeLabelStyle,
    },
    {
        id: "e10-argo-k8s",
        source: "argo-cd",
        target: "k8s-group",
        label: "⚙️ Deploy to Cluster",
        animated: true,
        type: "smoothstep",
        style: { ...edgeStyles.primary, stroke: "#10b981" },
        markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" },
        labelStyle: edgeLabelStyle,
    },

    // =============================================================================
    // 2. KUBERNETES CLUSTER INTERNAL CONNECTIONS
    // =============================================================================

    // Management Layer
    {
        id: "e11-portainer-alerts",
        source: "portainer",
        target: "ms-alertes",
        label: "⚡ Manage Containers",
        type: "smoothstep",
        style: edgeStyles.interaction,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" },
        labelStyle: edgeLabelStyle,
    },
    {
        id: "e12-portainer-api",
        source: "portainer",
        target: "api-laravel",
        label: "⚡ Manage Containers",
        type: "smoothstep",
        style: edgeStyles.interaction,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" },
        labelStyle: edgeLabelStyle,
    },
    {
        id: "e13-portainer-notifs",
        source: "portainer",
        target: "ms-notifs",
        label: "⚡ Manage Containers",
        type: "smoothstep",
        style: edgeStyles.interaction,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" },
        labelStyle: edgeLabelStyle,
    },

    // Service to Database Connections
    {
        id: "e14-alerts-db",
        source: "ms-alertes",
        target: "pg-alertes",
        label: "💾 Read/Write Data",
        type: "smoothstep",
        style: edgeStyles.dataFlow,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" },
        labelStyle: edgeLabelStyle,
    },
    {
        id: "e15-api-db",
        source: "api-laravel",
        target: "mariadb",
        label: "💾 Read/Write Data",
        type: "smoothstep",
        style: edgeStyles.dataFlow,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" },
        labelStyle: edgeLabelStyle,
    },
    {
        id: "e16-notifs-db",
        source: "ms-notifs",
        target: "pg-notifs",
        label: "💾 Read/Write Data",
        type: "smoothstep",
        style: edgeStyles.dataFlow,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" },
        labelStyle: edgeLabelStyle,
    },

    // Message Queue Connections
    {
        id: "e17-alerts-rabbit",
        source: "ms-alertes",
        target: "rabbitmq",
        label: "📨 Publish Events",
        type: "smoothstep",
        style: edgeStyles.dataFlow,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" },
        labelStyle: edgeLabelStyle,
    },

    {
        id: "e19-rabbit-notifs",
        source: "rabbitmq",
        target: "ms-notifs",
        label: "📥 Consume Events",
        type: "smoothstep",
        animated: true,
        style: edgeStyles.dataFlow,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" },
        labelStyle: edgeLabelStyle,
    },

    // Cache Connections
    {
        id: "e20-api-redis",
        source: "api-laravel",
        target: "redis",
        label: "⚡ Cache Operations",
        type: "smoothstep",
        style: edgeStyles.interaction,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" },
        labelStyle: edgeLabelStyle,
    },

    // =============================================================================
    // 3. OBSERVABILITY & MONITORING CONNECTIONS
    // =============================================================================

    // Metrics Collection
    {
        id: "e24-k8s-prometheus",
        source: "k8s-group",
        target: "prometheus",
        label: "📊 Collect Metrics",
        type: "smoothstep",
        style: edgeStyles.monitoring,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" },
        labelStyle: edgeLabelStyle,
    },
    {
        id: "e25-k8s-loki",
        source: "k8s-group",
        target: "loki",
        label: "📋 Collect Logs",
        type: "smoothstep",
        style: edgeStyles.monitoring,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#f59e0b" },
        labelStyle: edgeLabelStyle,
    },
    
    {
        id: "e26-k8s-sentry",
        source: "sentry",
        target: "k8s-group",
        label: "🐛 Error Tracking",
        type: "smoothstep",
        style: edgeStyles.errorTracking,
        labelStyle: edgeLabelStyle,
    },

    // Visualization & Alerting
    {
        id: "e26-prometheus-grafana",
        source: "prometheus",
        target: "grafana",
        label: "📈 Metrics Dashboard",
        type: "smoothstep",
        style: edgeStyles.dataFlow,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" },
        labelStyle: edgeLabelStyle,
    },
    {
        id: "e27-loki-grafana",
        source: "loki",
        target: "grafana",
        label: "📝 Logs Dashboard",
        type: "smoothstep",
        style: edgeStyles.dataFlow,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" },
        labelStyle: edgeLabelStyle,
    },
    {
        id: "e29-grafana-n8n",
        source: "grafana",
        target: "n8n",
        label: "🚨 Alert Workflows",
        animated: true,
        type: "smoothstep",
        style: edgeStyles.interaction,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" },
        labelStyle: edgeLabelStyle,
    },
    {
        id: "e30-n8n-discord",
        source: "n8n",
        target: "discord",
        label: "💬 Team Notifications",
        animated: true,
        type: "smoothstep",
        style: edgeStyles.external,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" },
        labelStyle: edgeLabelStyle,
    },

    // =============================================================================
    // 4. EXTERNAL SERVICES & MOBILE CONNECTIONS
    // =============================================================================

    // Push Notification Flow
    {
        id: "e31-notifs-fcm",
        source: "ms-notifs",
        target: "fcm",
        label: "📱 Android Push",
        animated: true,
        type: "smoothstep",
        style: edgeStyles.external,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" },
        labelStyle: edgeLabelStyle,
    },
    {
        id: "e32-notifs-apns",
        source: "ms-notifs",
        target: "apns",
        label: "🍎 iOS Push",
        animated: true,
        type: "smoothstep",
        style: edgeStyles.external,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" },
        labelStyle: edgeLabelStyle,
    },

    // Mobile App Connections
    {
        id: "e33-fcm-mobile",
        source: "fcm",
        target: "app-mobile",
        animated: true,
        type: "smoothstep",
        style: edgeStyles.external,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" },
        labelStyle: edgeLabelStyle,
    },
    {
        id: "e34-apns-mobile",
        source: "apns",
        target: "app-mobile",
        animated: true,
        type: "smoothstep",
        style: edgeStyles.external,
        markerEnd: { type: MarkerType.ArrowClosed, color: "#10b981" },
        labelStyle: edgeLabelStyle,
    },

    
]

export default function TargetArchitectureSlide() {
    const [isSSR, setIsSSR] = useState(true)
    useEffect(() => {
        setIsSSR(false)
    }, [])

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

    const onConnect = useCallback(
        (params: any) => {
            if (typeof addEdge === "function" && typeof setEdges === "function") {
                setEdges((eds) => addEdge(params, eds))
            }
        },
        [setEdges],
    )
    

    if (isSSR || (typeof ReactFlow !== "function" && (typeof ReactFlow !== "object" || !ReactFlow))) {
        return (
            <div className="w-screen h-screen flex items-center justify-center bg-slate-100">
                <p className="text-slate-500">Loading Diagram...</p>
            </div>
        )
    }
    return (
        <SlideWrapper>
            <div className="h-full flex flex-col">
                {/* <SlideHeader
                    badge="3 • Architecture"
                    title="Architecture Cible"
                    subtitle="Conception détaillée de l'architecture microservices proposée"
                /> */}

                <div className="flex-1 grid grid-cols-1 lg:grid-cols-1 gap-6 min-h-0">
                    <div className="bg-slate-50 rounded-xl overflow-hidden">
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            fitView
                            attributionPosition="bottom-left"
                            proOptions={{ hideAttribution: true }}
                            fitViewOptions={{
                                padding: 0.1,
                                minZoom: 0.5,
                                maxZoom: 1.5,
                            }}
                        >
                            <Controls className="react-flow-controls modern-controls" />
                            <Background variant={BackgroundVariant?.Dots || "dots" as any} gap={20} size={1} color="#e2e8f0" />
                        </ReactFlow>
                    </div>
                </div>
                
                {/* Enhanced CSS Styles */}
                <style jsx>{`
                    @keyframes flow {
                        0% { stroke-dashoffset: 20; }
                        100% { stroke-dashoffset: 0; }
                    }
                    
                    @keyframes pulse-glow {
                        0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
                        50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6); }
                    }
                    
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-3px); }
                    }
                    
                    .react-flow__node {
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    
                    .react-flow__node:hover {
                        transform: translateY(-2px) scale(1.02);
                        z-index: 1000;
                    }
                    
                    .react-flow__node.react-flow__node-input {
                        animation: pulse-glow 3s ease-in-out infinite;
                    }
                    
                    .react-flow__edge {
                        transition: all 0.3s ease;
                    }
                    
                    .react-flow__edge:hover {
                        stroke-width: 3px !important;
                    }
                    
                    .react-flow__edge.react-flow__edge-animated {
                        animation: flow 2s linear infinite;
                    }
                    
                    .react-flow__edge-label {
                        background: rgba(255, 255, 255, 0.95);
                        backdrop-filter: blur(4px);
                        border-radius: 6px;
                        padding: 4px 8px;
                        font-size: 11px;
                        font-weight: 600;
                        color: #475569;
                        border: 1px solid #e2e8f0;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }
                    
                    .react-flow__controls {
                        background: rgba(255, 255, 255, 0.9);
                        backdrop-filter: blur(10px);
                        border-radius: 12px;
                        border: 1px solid #e2e8f0;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    }
                    
                    .react-flow__controls button {
                        background: transparent;
                        border: none;
                        transition: all 0.2s ease;
                        border-radius: 8px;
                        margin: 2px;
                    }
                    
                    .react-flow__controls button:hover {
                        background: rgba(59, 130, 246, 0.1);
                        transform: scale(1.1);
                    }
                    
                    /* Group node styling */
                    .react-flow__node[data-id="devops-group"] {
                        animation: float 6s ease-in-out infinite;
                    }
                    
                    .react-flow__node[data-id="k8s-group"] {
                        animation: float 6s ease-in-out infinite 2s;
                    }
                    
                    .react-flow__node[data-id="obs-group"] {
                        animation: float 6s ease-in-out infinite 4s;
                    }
                    
                    .react-flow__node[data-id="ext-group"] {
                        animation: float 6s ease-in-out infinite 1s;
                    }
                    
                    /* Status indicator animations */
                    @keyframes spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    
                    @keyframes bounce {
                        0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
                        40%, 43% { transform: translateY(-8px); }
                        70% { transform: translateY(-4px); }
                        90% { transform: translateY(-2px); }
                    }
                    
                    /* Gradient overlays for better visual hierarchy */
                    .react-flow__pane {
                        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                    }
                    
                    /* Enhanced minimap styling */
                    .react-flow__minimap {
                        background: rgba(255, 255, 255, 0.9);
                        border-radius: 8px;
                        border: 1px solid #e2e8f0;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    }
                    
                    /* Responsive design for smaller screens */
                    @media (max-width: 768px) {
                        .react-flow__node {
                            font-size: 10px;
                        }
                        
                        .react-flow__edge-label {
                            font-size: 9px;
                            padding: 2px 4px;
                        }
                    }
                `}</style>
            </div>
        </SlideWrapper>
    )
}
