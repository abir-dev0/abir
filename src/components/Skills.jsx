import { motion } from 'framer-motion';
import { 
  SiReact, SiRedux, SiJavascript, SiNodedotjs, SiExpress, SiLaravel, SiPython, SiDjango, SiCplusplus,
  SiMongodb, SiMysql, SiApachecassandra, SiRedis, SiNeo4J, SiTypescript, SiTailwindcss, SiPostgresql, SiFramer
} from 'react-icons/si';
import { 
  FaGithub, FaDocker, FaCode, FaLinux, FaCss3Alt, FaHtml5, FaGitAlt, FaDatabase, FaMobileAlt
} from 'react-icons/fa';

const Skills = () => {
  const row1 = [
    { name: 'React.js', icon: <SiReact /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'Redux.js', icon: <SiRedux /> },
    { name: 'Express.js', icon: <SiExpress /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Responsive Design', icon: <FaMobileAlt /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'Django', icon: <SiDjango /> }
  ];

  const row2 = [
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Oracle', icon: <FaDatabase /> },
    { name: 'Redis', icon: <SiRedis /> },
    { name: 'Laravel', icon: <SiLaravel /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'C++', icon: <SiCplusplus /> }
  ];

  // Doubling the rows to ensure seamless looping
  const fullRow1 = [...row1, ...row1];
  const fullRow2 = [...row2, ...row2];

  return (
    <section id="skills" className="section" style={{ overflow: 'hidden', padding: '10rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ marginBottom: '1.5rem' }}>Technical Stack</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            The tools and technologies I use to bring your ideas to life
          </p>
        </motion.div>
      </div>

      {/* Row 1 - Left to Right */}
      <div style={{ marginBottom: '2rem', width: '100%' }}>
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{ display: 'flex', gap: '2rem', width: 'fit-content' }}
        >
          {fullRow1.map((skill, index) => (
            <SkillCard key={`row1-${index}`} skill={skill} />
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Right to Left */}
      <div style={{ width: '100%' }}>
        <motion.div
          animate={{ x: [-2000, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          style={{ display: 'flex', gap: '2rem', width: 'fit-content' }}
        >
          {fullRow2.map((skill, index) => (
            <SkillCard key={`row2-${index}`} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }) => (
  <div
    className="glass-panel"
    style={{
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      padding: '1.25rem 2.5rem',
      background: 'rgba(255, 255, 255, 0.02)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '1rem',
      cursor: 'default',
      transition: 'all 0.3s ease'
    }}
  >
    <span style={{ color: 'var(--accent-color)', fontSize: '1.8rem', display: 'flex' }}>
      {skill.icon}
    </span>
    <span style={{ 
      fontSize: '1.1rem', 
      color: 'var(--text-primary)', 
      fontWeight: '500',
      whiteSpace: 'nowrap'
    }}>
      {skill.name}
    </span>
  </div>
);

export default Skills;
