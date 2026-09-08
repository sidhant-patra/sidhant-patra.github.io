export type Project = {
  title: string;
  tags: string;
  description: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: 'Decentralised Adaptive Reconfiguration of Spacecraft Formations',
    tags: 'Astrodynamics · Autonomous Systems · Collision Avoidance · Optimisation',
    description:
      'Developed and validated a framework for autonomous reconfiguration of distributed satellite systems, integrating orbital dynamics, decentralised decision-making, collision avoidance and multi-objective resource optimisation.',
    links: [
      {
        label: 'Read TUM thesis',
        href: 'https://mediatum.ub.tum.de/1739106',
      },
    ],
  },
  {
    title: 'Autonomous Tracking & Pointing System',
    tags: 'GNC · State Estimation · Opto-Mechanical Systems · Space Communications',
    description:
      'Designed a satellite test-bench architecture for free-space optical communication combining mechanical pointing hardware, sensors, mathematical modelling, PID control and Kalman-filter-based state estimation.',
    links: [
      {
        label: 'Read technical report',
        href: 'https://mediatum.ub.tum.de/doc/1725139/mu9x7cwwil8q1b1hd9xvihmgf.Sidhant_Patra_Internship_Report.pdf',
      },
    ],
  },
  {
    title: 'VASE Radiation-Monitoring Spacecraft',
    tags: 'Spacecraft Design · Systems Engineering · Structures · Trade Studies',
    description:
      'Contributed to the architecture and structural design of a 500 kg LEO–MEO radiation-monitoring spacecraft, including shielding, structural interfaces, solar-array mechanisms and multidisciplinary mass/stiffness/radiation trades.',
    links: [],
  },
  {
    title: 'Spacecraft Operations & EventSAT',
    tags: 'Mission Operations · AOCS · ConOps · STK/GMAT',
    description:
      'Developed LEOP, commissioning and anomaly-resolution scenarios for graduate spacecraft-operations training and contributed to AOCS architecture, operating modes and system-level design for EventSAT.',
    links: [],
  },
  {
    title: 'KIITSAT Spacecraft Development',
    tags: 'CubeSat · Structures · Payload Mechanisms · Orbital Analysis',
    description:
      'My early spacecraft work combined structural design, orbital analysis, payload-interface engineering and CubeSat development — the point where mechanical engineering became space engineering.',
    links: [],
  },
];