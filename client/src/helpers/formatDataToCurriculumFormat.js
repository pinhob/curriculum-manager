export const formatDataToCurriculumFormat = (data, curriculums) => {
  return {
    id: curriculums.length + 1,
    name: data.name,
    phone: data.phone,
    email: data.email,
    role: data.role,
    city: data.city,
    state: data.state,
    profiles: {
      linkedin: data.profile_linkedin,
      github: data.profile_github
    },
    presentation: data.presentation,
    education: [{
      course: data.education_course,
      instituion: data.education_instituion,
      type: data.education_type,
      end_date: data.education_end_date,
    }],
    work: [{
      role: data.job_role,
      company: data.job_company,
      start_date: data.job_start_date,
      end_date: data.job_end_date,
      still_employed: data.job_still_employed,
    }],
    stacks: data.stacks.split(', '),
    languages: [{
      language: data.languages_language,
      level: data.languages_level,
    }],
    other_experiences: [{
      role: data.other_experiences_role,
      institution: data.other_experiences_institution,
      start_date: data.other_experiences_start_date,
      end_date: data.other_experiences_end_date,
    }],
  }
};
