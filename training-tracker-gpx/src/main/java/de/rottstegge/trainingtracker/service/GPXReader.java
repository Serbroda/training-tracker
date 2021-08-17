package de.rottstegge.trainingtracker.service;

import de.rottstegge.trainingtracker.model.GpxType;

public interface GPXReader {

    GpxType read(String file);
}
