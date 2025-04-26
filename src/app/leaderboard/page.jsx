"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Medal, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState(null);
  const [expandedTeamEvents, setExpandedTeamEvents] = useState({});
  const [expandedIndividualEvents, setExpandedIndividualEvents] = useState({});
  
  // Animation variants for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Header animation variants
  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.32, 0.72, 0, 1] // Power3.out equivalent
      } 
    }
  };

  // Scroll animation setup
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  const headerY = useTransform(scrollY, [0, 50], [0, -20]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Assets/leaderboard.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        // Initialize all events to expanded
        const teamEventStates = {};
        data.teamEvents.forEach((_, index) => {
          teamEventStates[index] = true;
        });
        
        const individualEventStates = {};
        data.individualEvents.forEach((_, index) => {
          individualEventStates[index] = true;
        });
        
        setExpandedTeamEvents(teamEventStates);
        setExpandedIndividualEvents(individualEventStates);
        setLeaderboardData(data);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleEventExpansion = (eventType, index) => {
    if (eventType === 'team') {
      setExpandedTeamEvents(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    } else {
      setExpandedIndividualEvents(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    }
  };

  if (!leaderboardData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-t-orange-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Medal colors based on rank
  const getMedalColor = (medal) => {
    switch (medal) {
      case 'Gold':
        return 'bg-amber-400 text-black';
      case 'Silver':
        return 'bg-gray-300 text-black';
      case 'Bronze':
        return 'bg-amber-700 text-white';
      default:
        return 'bg-gray-600';
    }
  };

  // Get rank badge background
  const getRankBadgeColor = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-amber-400 text-black';
      case 2:
        return 'bg-gray-300 text-black';
      case 3:
        return 'bg-amber-700 text-white';
      default:
        return 'bg-gray-700 text-white';
    }
  };

  return (
    <div className="min-h-screen text-white pb-16 backdrop-blur-sm [font-family:var(--font-montserrat)]">
      <motion.header 
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        style={{ opacity: headerOpacity, y: headerY }}
        className="w-full py-3 text-center backdrop-blur-sm absolute top-0 left-0 right-0 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white [font-family:var(--font-montserratb)]">
          LEADERBOARDS
        </h1>
      </motion.header>

      <main className="max-w-6xl mt-10 mx-auto px-0.5 sm:px-4 lg:px-8 pt-20 pb-6 space-y-14">
        {/* All Events Listed Vertically */}
        <div className="space-y-16">
          {/* Team Events */}
          {leaderboardData.teamEvents.map((teamEvent, eventIndex) => (
            <section 
              key={`team-${eventIndex}`}
              className="relative overflow-hidden transition-all duration-500 border-l-4 border-orange-400 pl-3 rounded-md"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-orange-400 [font-family:var(--font-montserrat)]">{teamEvent.name}</h2>
                  <p className="text-gray-200 mt-2 max-w-3xl text-xl leading-7">{teamEvent.description}</p>
                </div>
                <button 
                  onClick={() => toggleEventExpansion('team', eventIndex)}
                  className="p-2 rounded-full bg-orange-400/20 hover:bg-orange-400/30 text-orange-400 transition-all"
                >
                  {expandedTeamEvents[eventIndex] ? (
                    <ChevronUp className="w-7 h-7" />
                  ) : (
                    <ChevronDown className="w-7 h-7" />
                  )}
                </button>
              </div>

              <AnimatePresence>
                {expandedTeamEvents[eventIndex] && (
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="space-y-3"
                  >
                    {teamEvent.teams.map((team) => (
                      <motion.div
                        key={`team-${team.rank}-${team.name}`}
                        variants={itemVariants}
                        className={`rounded-xl overflow-hidden backdrop-blur-lg ${
                          team.rank <= 3 
                            ? 'border-l-4 border-t border-r border-b border-orange-400/40' 
                            : 'border border-white/10'
                        }`}
                      >
                        <div className={`p-5 ${
                          team.rank === 1 
                            ? 'bg-black/80' 
                            : team.rank === 2 
                              ? 'bg-black/70' 
                              : team.rank === 3 
                                ? 'bg-black/60' 
                                : team.rank % 2 === 0 
                                  ? 'bg-black/40' 
                                  : 'bg-black/50'
                        }`}>
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 mb-4">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 rounded-full ${getRankBadgeColor(team.rank)} flex items-center justify-center font-bold text-lg shadow-md shadow-black/50 [font-family:var(--font-montserratb)]`}>
                                #{team.rank}
                              </div>
                              <h3 className="text-2xl font-bold flex items-center space-x-2 [font-family:var(--font-montserratb)]">
                                <span>{team.name}</span>
                                {team.trophy && <Trophy className="w-6 h-6 text-orange-400" />}
                              </h3>
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                              <div className={`px-3 py-1 rounded-full text-base font-semibold ${getMedalColor(team.medal)} shadow-md shadow-black/50 [font-family:var(--font-montserratb)]`}>
                                {team.medal}
                              </div>
                              {team.Amount && (
                                <div className="px-3 py-1 rounded-full text-base font-semibold bg-green-600 text-white shadow-md shadow-black/50 [font-family:var(--font-montserratb)]">
                                  ₹{team.Amount}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {team.members.map((member, index) => (
                              <div 
                                key={`member-${index}-${member.name}`}
                                className="bg-black/60 p-3 rounded-lg backdrop-blur-sm border border-orange-400/30 hover:border-orange-400/60 transition-all shadow-md"
                              >
                                <p className="font-semibold text-lg text-orange-400 [font-family:var(--font-montserratb)]">{member.name}</p>
                                <p className="text-base text-gray-300">
                                  {member.year}{member.year === 1 ? 'st' : member.year === 2 ? 'nd' : member.year === 3 ? 'rd' : 'th'} year • {member.dept}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          ))}

          {/* Individual Events */}
          {leaderboardData.individualEvents.map((individualEvent, eventIndex) => (
            <section 
              key={`individual-${eventIndex}`}
              className="relative overflow-hidden transition-all duration-500 border-l-4 border-orange-400 pl-3 rounded-md"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-orange-400 [font-family:var(--font-montserrat)]">{individualEvent.name}</h2>
                  <p className="text-gray-200 mt-2 max-w-3xl text-xl leading-7">{individualEvent.description}</p>
                </div>
                <button 
                  onClick={() => toggleEventExpansion('individual', eventIndex)}
                  className="p-2 rounded-full bg-orange-400/20 hover:bg-orange-400/30 text-orange-400 transition-all"
                >
                  {expandedIndividualEvents[eventIndex] ? (
                    <ChevronUp className="w-7 h-7" />
                  ) : (
                    <ChevronDown className="w-7 h-7" />
                  )}
                </button>
              </div>

              <AnimatePresence>
                {expandedIndividualEvents[eventIndex] && (
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="space-y-2"
                  >
                    {individualEvent.participants.map((participant) => (
                      <motion.div
                        key={`participant-${participant.rank}-${participant.name}`}
                        variants={itemVariants}
                        className={`rounded-lg overflow-hidden backdrop-blur-lg ${
                          participant.rank <= 3 
                            ? 'border-l-2 border-t border-r border-b border-orange-400/40' 
                            : 'border border-white/10'
                        }`}
                      >
                        <div className={`flex flex-col md:flex-row items-start md:items-center justify-between p-4 gap-3 md:gap-0 ${
                          participant.rank === 1 
                            ? 'bg-black/70' 
                            : participant.rank === 2 
                              ? 'bg-black/60' 
                              : participant.rank === 3 
                                ? 'bg-black/50' 
                                : participant.rank % 2 === 0 
                                  ? 'bg-black/30' 
                                  : 'bg-black/40'
                        }`}>
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 flex items-center justify-center ${getRankBadgeColor(participant.rank)} rounded-full shadow-md shadow-black/50 [font-family:var(--font-montserratb)]`}>
                              <span className="font-bold text-base">#{participant.rank}</span>
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <h3 className="font-semibold text-xl text-orange-400 [font-family:var(--font-montserratb)]">{participant.name}</h3>
                              </div>
                              <p className="text-base text-gray-300 border-b border-orange-400/30 pb-1">
                                {participant.year}{participant.year === 1 ? 'st' : participant.year === 2 ? 'nd' : participant.year === 3 ? 'rd' : 'th'} year • {participant.dept}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <div className={`px-3 py-1 rounded-full font-semibold text-base ${
                              participant.rank <= 3 ? getRankBadgeColor(participant.rank) : 'bg-gray-800 text-white'
                            } shadow-md shadow-black/50 [font-family:var(--font-montserratb)]`}>
                              {participant.points} points
                            </div>
                            {participant.Amount && (
                              <div className="px-3 py-1 rounded-full text-base font-semibold bg-green-600 text-white shadow-md shadow-black/50 [font-family:var(--font-montserratb)]">
                                ₹{participant.Amount}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}