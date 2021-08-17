package de.rottstegge.trainingtracker.service;

import de.rottstegge.trainingtracker.service.impl.GPXReaderImpl;
import org.junit.Test;

public class GPXReaderTest {

    @Test
    public void test() {
        GPXReader reader = new GPXReaderImpl();
        System.out.println(reader.read("C:\\Workspace\\training-tracker\\training-tracker-gpx\\src\\test\\resources\\test.gpx"));
    }
}
