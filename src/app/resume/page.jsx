"use client"

import { FaJs, FaNodeJs } from 'react-icons/fa'
import {
    SiNestjs,
    SiTypescript,
    SiTypeorm,
    SiMongodb,
    SiPostgresql,
    SiGraphql,
    SiNx,
    SiExpress,
    SiSocketdotio,
    SiJsonwebtokens,
    SiSwagger,
    SiJest,
    SiAmazonwebservices,
    SiGithubactions,
    SiGrafana,
    SiBitbucket,
    SiTerraform,
    SiKubernetes,
    SiAwsfargate,
    SiAwslambda,
    SiAwssecretsmanager,
    SiAwselasticloadbalancing,
    SiAwsamplify,
    SiAmazonec2,
    SiAmazonecs,
    SiAmazonapigateway,
    SiAmazondynamodb,
    SiAmazoncloudwatch,
    SiAmazonelasticache,
    SiAmazoniam,
    SiAmazonrds,
    SiAmazonsqs,
    SiAmazons3,
    SiAmazonroute53,
    SiDocker,
    SiGit,
} from 'react-icons/si'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const about = {
    title: 'About me',
    description:"As a Backend Developer with over 5 years of experience and 3 years as a DevOps Engineer, my professional prowess lies in delivering agile and efficient solutions using technologies such as NestJs, JavaScript, Docker, and AWS. My dynamic and proactive nature fuels my continuous quest for learning and improving; I specialize in implementing best practices for design patterns, microservices, and CI/CD procedures. Complementing my technical abilities, my excellent communication skills and team collaboration mindset play pivotal roles in conceptualizing and originating superior, world-class solutions. I am keen on extending my knowledge in areas including SRE, Big Data, Machine Learning, and Cyber Security.",
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Pablo Villamizar'
        },
        {
            fieldName: 'Phone',
            fieldValue: '(+57) 320 9099304'
        },
        {
            fieldName: 'Experience',
            fieldValue: '5+ Years'
        },
        {
            fieldName: 'Email',
            fieldValue: 'pablomvillamizar@gmail.com'
        },
        {
            fieldName: 'Languages',
            fieldValue: 'English, Spanish'
        },
    ]
}
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description:"This is a quick view about my professional experience.",
    items: [
        {
            company: 'Reign',
            position: 'DevOps Engineer',
            duration: 'October 2021 - December 2022'
        },
        {
            company: 'Walls Team',
            position: 'DevOps Engineer',
            duration: 'November 2020 - October 2021'
        },
        {
            company: 'Seo Contenidos',
            position: 'FullStack Developer',
            duration: 'April 2020 - November 2020'
        },
        {
            company: 'Solución Empresarial 21',
            position: 'FullStack Developer',
            duration: 'August 2018 - November 2020'
        },
    ]
}
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My education',
    description:"Here's a quick tour of my educational journey! These are the degrees and schools that have fueled my passion for tech and shaped my expertise in the field.",
    items: [
        {
            institution: 'Instituto Universitario Politécnico Santiago Mariño',
            degree: 'Systems Engineering',
            duration: 'In Progress'
        },
        {
            institution: 'Udemy',
            degree: 'More than Certified in Terraform',
            duration: 'July 20, 2022'
        },
        {
            institution: 'Platzi',
            degree: 'Infrastructure as code using terraform',
            duration: 'July 18, 2022'
        },
        {
            institution: 'Udemy',
            degree: 'AWS Lambda and the Serverless Framework - Hands On Learning!',
            duration: 'April 8, 2022'
        },
        {
            institution: 'Udemy',
            degree: 'Docker Mastery: with Kubernetes + Swarm from a Docker Captain',
            duration: 'April 8, 2022'
        },
        {
            institution: 'Udemy',
            degree: 'Kubernetes Certified Application Developer (CKAD) with Tests',
            duration: 'March 15, 2022'
        },
        {
            institution: 'Udemy',
            degree: 'Kubernetes for the Absolute Beginners - Hands - on',
            duration: 'Jan. 9, 2022'
        }
    ]
}
const backendSkills = {
    title: "My Backend Skills",
    description:"These are some of my Backend skills",
    skillList: [
        {
            icon: <SiGit />,
            name: "Git"
        },
        {
            icon: <FaJs />,
            name: "JavaScript"
        },
        {
            icon: <SiTypescript />,
            name: "TypeScript"
        },
        {
            icon: <FaNodeJs />,
            name: "NodeJs"
        },
        {
            icon: <SiExpress />,
            name: "ExpressJs"
        },
        {
            icon: <SiJsonwebtokens />,
            name: "JWT"
        },
        {
            icon: <SiNestjs />,
            name: "NestJs"
        },
        {
            icon: <SiJest />,
            name: "Unit Testing"
        },
        {
            icon: <SiTypeorm />,
            name: "TypeOrm"
        },
        {
            icon: <SiPostgresql />,
            name: "PostgreSQL"
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB"
        },
        {
            icon: <SiGraphql />,
            name: "GraphQL"
        },
        {
            icon: <SiNx />,
            name: "NX Monorepo"
        },
        {
            icon: <SiSocketdotio />,
            name: "Socket.io"
        },
        {
            icon: <SiSwagger />,
            name: "Swagger"
        }
    ]
}
const devopsSkills = {
    title: "My DevOps Skills",
    description:"These are some of my DevOps skills",
    skillList: [
        {
            icon: <SiAmazonwebservices />,
            name: "AWS Services"
        },
        {
            icon: <SiGithubactions />,
            name: "Github Actions"
        },
        {
            icon: <SiBitbucket />,
            name: "Bitbucket Pipelines"
        },
        {
            icon: <SiTerraform />,
            name: "Terraform"
        },
        {
            icon: <SiDocker />,
            name: "Docker"
        },
        {
            icon: <SiKubernetes />,
            name: "Kubernetes"
        },
        {
            icon: <SiGrafana />,
            name: "Grafana"
        },
        {
            icon: <SiAmazoniam />,
            name: "AWS IAM"
        },
        {
            icon: <SiAwselasticloadbalancing />,
            name: "AWS Elastic Load Balancing"
        },
        {
            icon: <SiAwsamplify />,
            name: "AWS Amplify"
        },
        {
            icon: <SiAmazonec2 />,
            name: "AWS EC2"
        },
        {
            icon: <SiAmazonecs />,
            name: "AWS ECS"
        },
        {
            icon: <SiAwsfargate />,
            name: "AWS Fargate"
        },
        {
            icon: <SiAmazonrds />,
            name: "AWS RDS"
        },
        {
            icon: <SiAmazonsqs />,
            name: "AWS SQS"
        },
        {
            icon: <SiAmazons3 />,
            name: "AWS S3"
        },
        {
            icon: <SiAmazonroute53 />,
            name: "AWS Route 53"
        },
        {
            icon: <SiAwssecretsmanager />,
            name: "AWS Secret Manager"
        },
        {
            icon: <SiAmazonapigateway />,
            name: "AWS Api Gateway"
        },
        {
            icon: <SiAwslambda />,
            name: "AWS Lambda Functions"
        },
        {
            icon: <SiAmazondynamodb />,
            name: "AWS DynamoDB"
        },
        {
            icon: <SiAmazoncloudwatch />,
            name: "AWS CloudWatch"
        },
        {
            icon: <SiAmazonelasticache />,
            name: "AWS Elasticache"
        }
    ]
}

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="devops-skills">DevOps Skills</TabsTrigger>
                        <TabsTrigger value="backend-skills">Backend Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {
                                            experience.items.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[490px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {
                                            education.items.map((item, index) => (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[225px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="devops-skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {devopsSkills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {devopsSkills.description}
                                    </p>
                                </div>
                                <ScrollArea className="h-[550px]">
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        {
                                            devopsSkills.skillList.map((skill, index) => (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                    {skill.icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="backend-skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {backendSkills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {backendSkills.description}
                                    </p>
                                </div>
                                <ScrollArea className="h-[550px]">
                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                        {
                                            backendSkills.skillList.map((skill, index) => (
                                                <li key={index}>
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                    {skill.icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">{skill.name}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {
                                        about.info.map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume