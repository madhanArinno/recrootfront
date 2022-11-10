import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import personalService from "../services/personal.service";
import resumeService from "../services/resume.services";

const initialState = {
  data: [],
  exper: {},
  skill: {},
  education: {},
  project: {},
  training: {},
  social: {},
  personalDetails: {},
  resume: {},
  cover: {},
  ids: {},
  code: {},
  certone: {},
  show: true,
};

export const retrievePersonal = createAsyncThunk(
  "personal/retrive",
  async () => {
    const res = await personalService.getAll();
    try {
      return res.data[0];
    } catch (error) {
      console.warn(error);
      return error;
    }
  }
);

export const setJobID = createAsyncThunk("set/Idsss", async (data) => {
  return data;
});

export const retrieveGetSinExperience = createAsyncThunk(
  "experience/retrive",
  async (id) => {
    const res = await personalService.getOneExp(id);
    return res.data.resume.workExperience[0];
  }
);
export const retrieveGetSinSkill = createAsyncThunk(
  "skill/retrive",
  async (id) => {
    const res = await personalService.getOneSkill(id);
    return res.data.resume.skills[0];
  }
);
export const retrieveGetSinEduca = createAsyncThunk(
  "educa/retrive",
  async (id) => {
    const res = await personalService.getOneEduca(id);
    return res.data.resume.education[0];
  }
);
export const retrieveGetSinProject = createAsyncThunk(
  "project/retrive",
  async (id) => {
    const res = await personalService.getOneProject(id);
    return res.data.resume.projects[0];
  }
);
export const retrieveGetSinTrain = createAsyncThunk(
  "train/retrive",
  async (id) => {
    const res = await personalService.getOneTrain(id);
    return res.data.resume.traning[0];
  }
);
export const retrieveGetSinCertificate = createAsyncThunk(
  "cert/retrive",
  async (id) => {
    const res = await personalService.getOneCert(id);
    return res.data.resume.certificateFileLocation[0];
  }
);
export const retrieveGetSinSocial = createAsyncThunk(
  "social/retrive",
  async (id) => {
    const res = await personalService.getOneSocial(id);
    return res.data.resume.socialMediaLink[0];
  }
);
export const retrieveGetSinResume = createAsyncThunk(
  "Resume/retrive",
  async (id) => {
    const res = await personalService.getOneResume(id);
    return res.data.resume.resumeFileLocation[0];
  }
);
export const retrieveGetSinCover = createAsyncThunk(
  "Cover/retrive",
  async (id) => {
    const res = await personalService.getOneCover(id);
    return res.data.resume.coverLetterFileLocation[0];
  }
);

export const AddResumeAndThenGet = (pdf) => async (dispatch) => {
  await dispatch(addResume(pdf));
  return await dispatch(retrievePersonal());
};

export const addResume = createAsyncThunk("add/resume", async (pdf) => {
  const formData = new FormData();
  formData.append("resume", pdf);
  const res = await personalService.addResume(formData);
  return res.data;
});

export const AddCoverAndThenGet = (pdf) => async (dispatch) => {
  await dispatch(addCover(pdf));
  return await dispatch(retrievePersonal());
};

export const addCover = createAsyncThunk("add/Cover", async (pdf) => {
  const formData = new FormData();
  formData.append("cover", pdf);
  const res = await personalService.addCover(formData);
  return res.data;
});

export const AddCertificateAndThenGet = (pdf) => async (dispatch) => {
  await dispatch(addCertificates(pdf));
  return await dispatch(retrievePersonal());
};

export const addCertificates = createAsyncThunk("add/Cover", async (pdf) => {
  const res = await resumeService.certificatesAdd(pdf);
  return res.data;
});
export const addEditCertificates = createAsyncThunk(
  "edit/Cover",
  async (pdf) => {
    const res = await resumeService.certificatesEdit(pdf);
    return res.data;
  }
);

export const AddPhotoAndThenGet = (photo) => async (dispatch) => {
  await dispatch(addProfphoto(photo));
  return await dispatch(retrievePersonal());
};

export const addProfphoto = createAsyncThunk("add/Profpic", async (photo) => {
  const formData = new FormData();
  formData.append("profpic", photo);
  const res = await personalService.addPhoto(formData);
  return res.data;
});

export const AddExperinceAndThenGet = (value) => async (dispatch) => {
  await dispatch(addExperinces(value));
  return await dispatch(retrievePersonal());
};

export const addExperinces = createAsyncThunk(
  "add/Experince",
  async (value) => {
    const res = await personalService.addExperience(value);
    return res.data;
  }
);
export const applyJobs = createAsyncThunk("apply/Jobs", async (value) => {
  const res = await personalService.applyJob(value);
  return res.data;
});
export const AddSkillAndThenGet = (value) => async (dispatch) => {
  await dispatch(addSkills(value));
  return await dispatch(retrievePersonal());
};

export const addSkills = createAsyncThunk("add/Experince", async (value) => {
  const res = await personalService.addSkill(value);
  return res.data;
});
export const AddEducaAndThenGet = (value) => async (dispatch) => {
  await dispatch(addEducations(value));
  return await dispatch(retrievePersonal());
};

export const addEducations = createAsyncThunk(
  "add/Education",
  async (value) => {
    const res = await personalService.addEducation(value);
    return res.data;
  }
);
export const AddProAndThenGet = (value) => async (dispatch) => {
  await dispatch(addProjects(value));
  return await dispatch(retrievePersonal());
};

export const addProjects = createAsyncThunk("add/Education", async (value) => {
  const res = await personalService.addProject(value);
  return res.data;
});
export const AddTrainAndThenGet = (value) => async (dispatch) => {
  await dispatch(addTrains(value));
  return await dispatch(retrievePersonal());
};

export const addTrains = createAsyncThunk("add/Train", async (value) => {
  const res = await personalService.addTrain(value);
  return res.data;
});
export const AddSocialAndThenGet = (value) => async (dispatch) => {
  await dispatch(addSocials(value));
  return await dispatch(retrievePersonal());
};

export const addSocials = createAsyncThunk("add/Education", async (value) => {
  const res = await personalService.addSocial(value);
  return res.data;
});

export const EditExperinceAndGet = (value, id) => async (dispatch) => {
  await dispatch(editExperinces({ value, id }));
  return await dispatch(retrievePersonal());
};

export const editExperinces = createAsyncThunk(
  "edit/Experince",
  async ({ value, id }) => {
    const res = await personalService.editExper(value, id);
    return res.data;
  }
);

export const editReferVer = createAsyncThunk("edit/verify", async (value) => {
  const res = await personalService.editVerify(value);
  return res.data;
});
export const resendVerify = createAsyncThunk("resend/verify", async (value) => {
  const res = await personalService.resendCode(value);
  return res.data;
});

export const EditSkillAndGet = (value, id) => async (dispatch) => {
  await dispatch(editSkills({ value, id }));
  return await dispatch(retrievePersonal());
};

export const editSkills = createAsyncThunk(
  "edit/Experince",
  async ({ value, id }) => {
    const res = await personalService.editSkill(value, id);
    return res.data;
  }
);
export const EditEducaAndGet = (value, id) => async (dispatch) => {
  await dispatch(editEducations({ value, id }));
  return await dispatch(retrievePersonal());
};

export const editEducations = createAsyncThunk(
  "edit/Education",
  async ({ value, id }) => {
    const res = await personalService.editEducation(value, id);
    return res.data;
  }
);
export const EditProjectAndGet = (value, id) => async (dispatch) => {
  await dispatch(editProjects({ value, id }));
  return await dispatch(retrievePersonal());
};

export const editProjects = createAsyncThunk(
  "edit/projects",
  async ({ value, id }) => {
    const res = await personalService.editProject(value, id);
    return res.data;
  }
);
export const EditTrainAndGet = (value, id) => async (dispatch) => {
  await dispatch(editTrains({ value, id }));
  return await dispatch(retrievePersonal());
};

export const editTrains = createAsyncThunk(
  "edit/Trains",
  async ({ value, id }) => {
    const res = await personalService.editTrain(value, id);
    return res.data;
  }
);
export const EditSocialandGet = (value, id) => async (dispatch) => {
  await dispatch(editSocials({ value, id }));
  return await dispatch(retrievePersonal());
};

export const editSocials = createAsyncThunk(
  "edit/Education",
  async ({ value, id }) => {
    const res = await personalService.editSocial(value, id);
    return res.data;
  }
);
export const EditPersonalandGet = (value) => async (dispatch) => {
  await dispatch(editPersonals(value));
  return await dispatch(retrievePersonal());
};

export const editPersonals = createAsyncThunk(
  "edit/Personal",
  async (value) => {
    const res = await personalService.editPersonal(value);
    return res.data;
  }
);
export const editPersonalsName = (value) => async (dispatch) => {
  await dispatch(editPersonalsNameDet(value));
  return await dispatch(retrievePersonal());
};
export const editPersonalsNameDet = createAsyncThunk(
  "edit/PersonalName",
  async (value) => {
    const res = await personalService.editPersonalName(value);
    return res.data;
  }
);

export const updateAndThenGet = (id) => async (dispatch) => {
  await dispatch(deleteResume(id));
  return await dispatch(retrievePersonal());
};

export const deleteResume = createAsyncThunk("delete/resume", async (id) => {
  const res = await personalService.delResume(id);
  return res.data;
});

export const deleteCoverAndGet = (id) => async (dispatch) => {
  await dispatch(deleteCover(id));
  return await dispatch(retrievePersonal());
};

export const deleteCover = createAsyncThunk("delete/Cover", async (id) => {
  const res = await personalService.delCover(id);
  return res.data;
});
export const deleteCertifiAndGet = (id) => async (dispatch) => {
  await dispatch(deleteCertificates(id));
  return await dispatch(retrievePersonal());
};

export const deleteCertificates = createAsyncThunk(
  "delete/Certificate",
  async (id) => {
    const res = await personalService.delCertificate(id);
    return res.data;
  }
);

export const deleteExperAndGet = (id) => async (dispatch) => {
  await dispatch(deleteExperience(id));
  return await dispatch(retrievePersonal());
};

export const deleteExperience = createAsyncThunk("delete/Exper", async (id) => {
  const res = await personalService.delExper(id);
  return res.data;
});
export const deleteSkillAndGet = (id) => async (dispatch) => {
  await dispatch(deleteSkill(id));
  return await dispatch(retrievePersonal());
};

export const deleteSkill = createAsyncThunk("delete/skill", async (id) => {
  const res = await personalService.delSkil(id);
  return res.data;
});
export const deleteEducaAndGet = (id) => async (dispatch) => {
  await dispatch(deleteEducation(id));
  return await dispatch(retrievePersonal());
};

export const deleteEducation = createAsyncThunk("delete/Educa", async (id) => {
  const res = await personalService.delEduca(id);
  return res.data;
});
export const deleteProjectAndGet = (id) => async (dispatch) => {
  await dispatch(deleteProjects(id));
  return await dispatch(retrievePersonal());
};

export const deleteProjects = createAsyncThunk("delete/project", async (id) => {
  const res = await personalService.delProject(id);
  return res.data;
});
export const deleteTrainAndGet = (id) => async (dispatch) => {
  await dispatch(deleteTraining(id));
  return await dispatch(retrievePersonal());
};

export const deleteTraining = createAsyncThunk("delete/train", async (id) => {
  const res = await personalService.delTrain(id);
  return res.data;
});
export const deleteSocialAndGet = (id) => async (dispatch) => {
  await dispatch(deleteSocials(id));
  return await dispatch(retrievePersonal());
};

export const deleteSocials = createAsyncThunk("delete/Social", async (id) => {
  const res = await personalService.delSocial(id);
  return res.data;
});

export const personalSet = createAsyncThunk("get/per", async (data) => {
  return data;
});
export const clearCoversin = createAsyncThunk("clear/cov", async (data) => {
  return data;
});
export const clearCover = createAsyncThunk("clear/cover", async (data) => {
  return data;
});
export const clearSinCover = createAsyncThunk(
  "clear/coverresume",
  async (data) => {
    return data;
  }
);
export const clearSinResume = createAsyncThunk(
  "clear/coversinresume",
  async (data) => {
    return data;
  }
);

const personalSlice = createSlice({
  name: "personal",
  initialState,
  extraReducers: {
    [personalSet.fulfilled]: (state, action) => {
      state.personalDetails = action.payload;
    },
    [clearCoversin.fulfilled]: (state, action) => {
      state.cover = action.payload;
    },
    [clearCover.fulfilled]: (state, action) => {
      state.show = action.payload;
    },
    [clearCoversin.fulfilled]: (state, action) => {
      state.cover = action.payload;
    },

    [retrievePersonal.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [retrieveGetSinExperience.fulfilled]: (state, action) => {
      state.exper = action.payload;
    },
    [retrieveGetSinSkill.fulfilled]: (state, action) => {
      state.skill = action.payload;
    },
    [retrieveGetSinEduca.fulfilled]: (state, action) => {
      state.education = action.payload;
    },
    [retrieveGetSinProject.fulfilled]: (state, action) => {
      state.project = action.payload;
    },
    [retrieveGetSinTrain.fulfilled]: (state, action) => {
      state.training = action.payload;
    },
    [retrieveGetSinSocial.fulfilled]: (state, action) => {
      state.social = action.payload;
    },
    [retrieveGetSinResume.fulfilled]: (state, action) => {
      state.resume = action.payload;
    },
    [retrieveGetSinCover.fulfilled]: (state, action) => {
      state.cover = action.payload;
    },
    [clearSinCover.fulfilled]: (state, action) => {
      state.cover = action.payload;
    },
    [retrieveGetSinCertificate.fulfilled]: (state, action) => {
      state.certone = action.payload;
    },
    [clearSinResume.fulfilled]: (state, action) => {
      state.resume = action.payload;
    },
    [addResume.fulfilled]: (state, action) => {
      console.warn(state.data, "datsaaaa");
    },
    [deleteResume.fulfilled]: (state, action) => {
      console.warn(state.data, "datsaaaa");
    },
    [addExperinces.fulfilled]: (state, action) => {
      console.warn(state.data, "extra");
    },
    [addSkills.fulfilled]: (state, action) => {
      console.warn(state.data, "extra");
    },
    [editExperinces.fulfilled]: (state, action) => {
      console.warn(state.data, "extra");
    },
    [setJobID.fulfilled]: (state, action) => {
      state.ids = action.payload;
    },
    [resendVerify.fulfilled]: (state, action) => {
      state.code = action.payload;
    },
  },
});

const { reducer } = personalSlice;

export default reducer;
