import { Project, ExperienceItem, SkillGroup, AboutDetails } from '../types';

export const aboutDetails: AboutDetails = {
  location: 'Stockton, California',
  email: 'snadeem2u@pacific.edu',
  linkedin: 'linkedin.com/in/nj-shahzaib',
  status: 'Seeking Opportunities',
  gpa: '3.9 Engineering GPA',
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Ion Thruster',
    description: 'Designed and built an ion thruster system using high-voltage air ionization principles. Implemented 3D design and simulation to optimize performance and safety.',
    technologies: ['Arduino', 'PSpice', 'Simulink', '3D Design'],
  },
  {
    id: '2',
    title: 'FPGA ALU',
    description: 'Developed a comprehensive Arithmetic Logic Unit on FPGA using SystemVerilog. Implemented complex digital logic with FSM control and extensive testing.',
    technologies: ['SystemVerilog', 'Cyclone V', 'Quartus', 'FSM'],
  },
  {
    id: '3',
    title: 'Autonomous Arduino Car',
    description: 'Built an autonomous vehicle using IR and PING sensors with DHT22 environmental monitoring. Implemented line tracking and obstacle avoidance algorithms.',
    technologies: ['Arduino', 'C++', 'Sensors', 'Embedded'],
  },
  {
    id: '4',
    title: 'AC-DC Converter',
    description: 'Designed and analyzed power conversion circuits using diodes and zener regulators. Performed comprehensive circuit analysis and simulation.',
    technologies: ['MATLAB', 'SPICE', 'Circuit Analysis'],
  },
  {
    id: '5',
    title: 'Digital Signal Processing',
    description: 'Implemented various filters, DFT/FFT algorithms, and spectrum analysis tools. Comprehensive study of signal processing techniques and applications.',
    technologies: ['MATLAB', 'Simulink', 'DSP', 'FFT'],
  },
  {
    id: '6',
    title: 'H-Bridge Motor Control',
    description: 'Designed PWM-controlled H-bridge circuits using MOSFETs for precise motor control. Performed detailed circuit analysis and optimization.',
    technologies: ['PWM', 'MOSFETs', 'PSpice'],
  },
  {
    id: '7',
    title: 'Bank Management System',
    description: 'Developed a comprehensive terminal-based banking system using object-oriented programming principles and advanced data structures.',
    technologies: ['C++', 'OOP', 'Data Structures'],
  },
  {
    id: '8',
    title: 'FPGA Simon Says',
    description: 'Created an interactive Simon Says game on FPGA with LED displays and user input handling. Implemented complex state machine logic.',
    technologies: ['SystemVerilog', 'FSM', 'LEDs'],
  },
  {
    id: '9',
    title: 'Python Cache Simulator',
    description: 'Built a memory cache simulator to analyze performance optimization techniques and memory access patterns using advanced Python programming.',
    technologies: ['Python', 'Performance', 'Argparse'],
  },
  {
    id: '10',
    title: 'Security Audit',
    description: 'Conducted comprehensive security assessment of Tiger Enterprises using industry-standard tools for vulnerability detection and exploitation analysis.',
    technologies: ['Nmap', 'OpenVAS', 'Nessus'],
  },
  {
    id: '11',
    title: 'MIPS Datapath Simulation',
    description: 'Implemented a complete MIPS processor simulation in Python, including assembly language processing and execution pipeline.',
    technologies: ['Python', 'MIPS', 'Assembly'],
  },
  {
    id: '12',
    title: "Shamir's Secret Sharing",
    description: 'Implemented cryptographic secret sharing algorithm for secure data distribution and reconstruction using advanced mathematical principles.',
    technologies: ['Cryptography', 'Python', 'Security'],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: '1',
    title: 'Engineering Aide',
    company: 'City of Stockton',
    duration: '2025 – Present',
    description: 'Performing hardware diagnostics and traffic engineering tasks including fieldwork, troubleshooting camera and sensor systems, and developing traffic control plans. Working directly with municipal infrastructure to ensure optimal traffic flow and safety.',
  },
  {
    id: '2',
    title: 'SOECS Tutor',
    company: 'University of the Pacific',
    duration: '2025 – Present',
    description: 'Providing comprehensive tutoring in Mathematics, Computer Science, and Engineering to fellow students. Helping peers understand complex concepts and improve their academic performance in technical subjects.',
  },
  {
    id: '3',
    title: 'STRIPE Cadet',
    company: 'University of the Pacific',
    duration: '2024 – 2025',
    description: 'Campus patrol and transportation services focused on student safety. Responsible for maintaining secure campus environment and providing assistance to students and visitors.',
  },
  {
    id: '4',
    title: 'Research Assistant',
    company: 'University of the Pacific',
    duration: '2024',
    description: 'Conducted research on EV carbon emissions modeling, formula validation, drive cycles, and energy source analysis. Contributed to understanding environmental impact of electric vehicles through data analysis and modeling.',
  },
  {
    id: '5',
    title: 'Resident Assistant',
    company: 'University of the Pacific',
    duration: '2022 – 2024',
    description: 'Community leader responsible for inclusive programming and student support. Organized events, provided guidance to residents, and fostered a positive living environment for diverse student populations.',
  },
  {
    id: '6',
    title: 'Academic Tutor',
    company: 'General Academic Tutoring Center',
    duration: '2022 – 2024',
    description: 'Specialized in mathematics and circuits tutoring, focusing on problem-solving techniques and exam preparation. Helped students develop strong foundational skills in technical subjects.',
  },
  {
    id: '7',
    title: 'Math Tutor',
    company: 'University of the Pacific',
    duration: '2022',
    description: 'Provided business calculus tutoring with emphasis on creative problem-solving approaches. Developed innovative teaching methods to help students grasp complex mathematical concepts.',
  },
  {
    id: '8',
    title: 'Game Developer Intern',
    company: 'UET Lahore',
    duration: '2022',
    description: 'Worked on 3D asset optimization, gameplay mechanics, and debugging for Unity projects. Gained experience in game development pipeline and collaborative software development practices.',
  },
];

export const skills: SkillGroup[] = [
  {
    category: 'Programming Languages',
    skills: ['SystemVerilog', 'C++', 'Python', 'C#'],
  },
  {
    category: 'Design & Simulation',
    skills: ['Quartus', 'PSpice', 'LTSpice', 'MATLAB', 'Simulink'],
  },
  {
    category: 'Hardware & Embedded',
    skills: ['Arduino', 'Embedded Systems', 'Hardware Diagnostics', 'Digital Signal Processing'],
  },
  {
    category: 'Software & Tools',
    skills: ['Unity', 'OOP', 'Debugging', 'Bluebeam'],
  },
  {
    category: 'Engineering & Leadership',
    skills: ['Traffic Engineering', 'Leadership', 'Teamwork', 'Project Management'],
  },
];

