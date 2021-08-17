package de.rottstegge.trainingtracker.service.impl;

import de.rottstegge.trainingtracker.model.GpxType;
import de.rottstegge.trainingtracker.service.GPXReader;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.JAXBIntrospector;
import javax.xml.bind.Unmarshaller;
import java.io.File;

public class GPXReaderImpl implements GPXReader {

    @Override
    public GpxType read(String file) {
        GpxType list = new GpxType();

        try {
            JAXBContext jaxbCtx = JAXBContext.newInstance(list.getClass().getPackage().getName());
            Unmarshaller unmarshaller = jaxbCtx.createUnmarshaller();
            return (GpxType) JAXBIntrospector.getValue(unmarshaller.unmarshal(new File(file)));
        } catch (JAXBException e) {
            e.printStackTrace();
            return null;
        }
    }
}
