import { motion } from 'framer-motion';
import { 
  SiReact, SiRedux, SiJavascript, SiNodedotjs, SiExpress, SiLaravel, SiPython, SiDjango, SiCplusplus,
  SiMongodb, SiMysql, SiApachecassandra, SiRedis, SiNeo4J
} from 'react-icons/si';
import { 
  FaBrain, FaNetworkWired, FaDatabase, FaWater, FaProjectDiagram, FaGithub, FaDocker, FaCode, FaRobot, FaLinux, FaCss3Alt
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: [
        { name: 'React.js', icon: <SiReact /> },
        { name: 'Redux.js', icon: <SiRedux /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'Laravel', icon: <SiLaravel /> },
        { name: 'Python', icon: <SiPython /> },
        { name: 'Django', icon: <SiDjango /> },
        { name: 'C++', icon: <SiCplusplus /> }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Oracle', icon: <FaDatabase /> },
        { name: 'Apache Cassandra', icon: <SiApachecassandra /> },
        { name: 'Redis', icon: <SiRedis /> },
        { name: 'Neo4J', icon: <SiNeo4J /> }
      ]
    },
    {
      title: 'Data & AI',
      skills: [
        { name: 'Machine Learning', icon: <FaBrain /> },
        { name: 'Deep Learning', icon: <FaNetworkWired /> },
        { name: 'Big Data', icon: <FaDatabase /> },
        { name: 'Data Lakehouse', icon: <FaWater /> }
      ]
    },
    {
      title: 'Other',
      skills: [
        { name: 'UML', icon: <FaProjectDiagram /> },
        { name: 'Git/GitHub', icon: <FaGithub /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'OOP', icon: <FaCode /> },
        { name: 'LLM Tools', icon: <FaRobot /> },
        { name: 'Linux/Unix', icon: <FaLinux /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '4rem' }}
        >
          Technical Skills
        </motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', gap: '1rem' }}>
                <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, transparent, var(--border-color))' }} />
                <h3 style={{ color: 'var(--text-primary)', margin: 0, fontSize: '1.4rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '2px' }}>
                  {category.title}
                </h3>
                <div style={{ height: '2px', flex: 1, background: 'linear-gradient(-90deg, transparent, var(--border-color))' }} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '1.5rem' }}>
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5, scale: 1.05 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1rem',
                      padding: '1.5rem 1rem',
                      background: 'var(--surface-color)',
                      borderRadius: '1rem',
                      border: '1px solid var(--border-color)',
                      cursor: 'pointer',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-color)';
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(18, 194, 233, 0.1)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--accent-gradient)', opacity: 0, transition: 'opacity 0.3s ease' }} className="top-glow" />
                    <span style={{ color: 'var(--accent-color)', fontSize: '2.5rem', filter: 'drop-shadow(0 0 8px rgba(18, 194, 233, 0.4))' }}>
                      {skill.icon}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textAlign: 'center', fontWeight: '500' }}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
